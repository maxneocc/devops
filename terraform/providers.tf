terraform {
  required_version = ">= 1.0"

  required_providers {
    scaleway = {
      source  = "scaleway/scaleway"
      version = "~> 2.0"
    }
  }
}

provider "scaleway" {
  zone   = "${var.region}-1"
  region = var.region
  # Access key and secret key are read from environment variables:
  # SCW_ACCESS_KEY and SCW_SECRET_KEY
}
