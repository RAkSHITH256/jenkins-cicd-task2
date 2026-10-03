# Jenkins CI/CD Pipeline - Task 2

A simple Node.js application with a Jenkins CI/CD pipeline using Docker.

## Technologies

- Node.js
- Express.js
- Jenkins
- Docker
- Docker Hub
- GitHub

## Pipeline

The Jenkins pipeline performs:

1. Install dependencies
2. Run tests
3. Build Docker image
4. Push Docker image to Docker Hub

```text
Git Push
   ↓
Jenkins
   ↓
Install Dependencies
   ↓
Test
   ↓
Docker Build
   ↓
Docker Hub
