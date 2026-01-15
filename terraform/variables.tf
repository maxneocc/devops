variable "region" {
  description = "Scaleway region"
  type        = string
  default     = "fr-par"
}

variable "zone" {
  description = "Scaleway zone"
  type        = string
  default     = "fr-par-1"
}

variable "instance_type" {
  description = "Instance type"
  type        = string
  default     = "DEV1-S"
}

variable "instance_name" {
  description = "Name of the instance"
  type        = string
  default     = "neo-ubuntu-server"
}

variable "tags" {
  description = "Tags to apply to resources"
  type        = list(string)
  default     = ["terraform", "ubuntu", "neo-cyber-camp"]
}
