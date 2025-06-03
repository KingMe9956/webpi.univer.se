provider "aws" {
  region = "us-east-1"
}

module "propay_ecs" {
  source  = "terraform-aws-modules/ecs/aws"
  version = "~> 4.0"

  cluster_name = "propay-cluster"

  # Task definitions, services, etc.
}

module "monitoring" {
  source = "./modules/signalfx"

  signalfx_token = var.signalfx_token
}