output "instance_id" {
  description = "ID of the instance"
  value       = scaleway_instance_server.ubuntu.id
}

output "instance_name" {
  description = "Name of the instance"
  value       = scaleway_instance_server.ubuntu.name
}

output "public_ip" {
  description = "Public IP address of the instance"
  value       = scaleway_instance_ip.public_ip.address
}

output "instance_state" {
  description = "State of the instance"
  value       = scaleway_instance_server.ubuntu.state
}

output "ssh_command" {
  description = "SSH command to connect to the instance"
  value       = "ssh root@${scaleway_instance_ip.public_ip.address}"
}

output "ubuntu_version" {
  description = "Ubuntu image used"
  value       = data.scaleway_instance_image.ubuntu.name
}
