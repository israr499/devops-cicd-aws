# DevOps CI/CD Pipeline on AWS

A production-grade CI/CD pipeline for a containerized Node.js + PostgreSQL app deployed on AWS.

## Tech Stack
- **App**: Node.js + Express + PostgreSQL
- **Containerization**: Docker + Docker Compose
- **CI/CD**: GitHub Actions
- **Image Registry**: Amazon ECR
- **Deployment**: Amazon ECS Fargate
- **Infrastructure**: Terraform (IaC)
- **Monitoring**: CloudWatch
- **Version Control**: Git (Gitflow branching strategy)

## Pipeline Flow
Push code to GitHub
↓
GitHub Actions triggers
↓
Run automated tests
↓
Build Docker image
↓
Scan image for vulnerabilities (Trivy)
↓
Push image to Amazon ECR
↓
Deploy to ECS Fargate
↓
App is live on AWS

## Branch Strategy
- `main` → production
- `develop` → integration
- `feature/*` → individual features

## Local Development
```bash
docker compose up --build
```

## Infrastructure Setup
```bash
cd terraform
terraform init
terraform plan
terraform apply
```

## Tear Down (save AWS credits)
```bash
cd terraform
terraform destroy
```
