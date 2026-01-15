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
      runcmd:
        - ufw allow OpenSSH
        - ufw allow 'Nginx Full'
        - ufw allow 3000/tcp
        - ufw --force enable
        - systemctl enable nginx
        - systemctl start nginx
        - curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
        - apt-get install -y nodejs
    EOF
  }
}
