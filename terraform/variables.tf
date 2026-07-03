variable "aws_region" {
  description = "AWS region to deploy resources"
  default     = "us-east-1"
}

variable "project_name" {
  description = "Project name used for naming resources"
  default     = "devops-cicd-aws"
}

variable "db_username" {
  description = "PostgreSQL master username"
  default     = "postgres"
}

variable "db_password" {
  description = "PostgreSQL master password"
  sensitive   = true
}
