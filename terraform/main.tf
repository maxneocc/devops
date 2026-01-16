# Get the latest Ubuntu image
data "scaleway_instance_image" "ubuntu" {
  name         = "Ubuntu 24.04 Noble Numbat"
  architecture = "x86_64"
}

# Create a public IP for the instance
resource "scaleway_instance_ip" "public_ip" {
  zone = var.zone
}

# Create security group
resource "scaleway_instance_security_group" "web" {
  name                    = "${var.instance_name}-sg"
  zone                    = var.zone
  inbound_default_policy  = "drop"
  outbound_default_policy = "accept"

  # SSH access
  inbound_rule {
    action   = "accept"
    port     = 22
    protocol = "TCP"
  }

  # HTTP access
  inbound_rule {
    action   = "accept"
    port     = 80
    protocol = "TCP"
  }

  # HTTPS access
  inbound_rule {
    action   = "accept"
    port     = 443
    protocol = "TCP"
  }

  # Custom app port (Next.js dev)
  inbound_rule {
    action   = "accept"
    port     = 3000
    protocol = "TCP"
  }
}

# Create the instance
resource "scaleway_instance_server" "ubuntu" {
  name  = var.instance_name
  zone  = var.zone
  type  = var.instance_type
  image = data.scaleway_instance_image.ubuntu.id

  ip_id = scaleway_instance_ip.public_ip.id

  security_group_id = scaleway_instance_security_group.web.id

  root_volume {
    size_in_gb            = 20
    volume_type           = "sbs_volume"
    delete_on_termination = true
  }

  tags = var.tags

  # Cloud-init to set up the instance
  user_data = {
    cloud-init = <<-EOF
      #cloud-config
      package_update: true
      package_upgrade: true
      packages:
        - curl
        - git
        - nginx
        - ufw
      write_files:
        - path: /etc/nginx/sites-available/default
          content: |
            server {
                listen 80 default_server;
                listen [::]:80 default_server;
                server_name _;

                location / {
                    proxy_pass http://127.0.0.1:3000;
                    proxy_http_version 1.1;
                    proxy_set_header Upgrade $http_upgrade;
                    proxy_set_header Connection 'upgrade';
                    proxy_set_header Host $host;
                    proxy_set_header X-Real-IP $remote_addr;
                    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                    proxy_set_header X-Forwarded-Proto $scheme;
                    proxy_cache_bypass $http_upgrade;
                }
            }
      runcmd:
        # Firewall setup
        - ufw allow OpenSSH
        - ufw allow 'Nginx Full'
        - ufw --force enable
        # Install Node.js 20
        - curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
        - apt-get install -y nodejs
        # Install PM2 globally
        - npm install -g pm2
        # Create app directory
        - mkdir -p /var/www/app
        - chown -R root:root /var/www/app
        # Enable and start Nginx
        - systemctl enable nginx
        - systemctl restart nginx
        # Configure PM2 to start on boot
        - pm2 startup systemd -u root --hp /root
    EOF
  }
}
