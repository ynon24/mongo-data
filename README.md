# 📦 mongo-data

This repository provides seed data for building a pre-loaded MongoDB container, intended for use in development environments.

A CI/CD pipeline is configured to automatically:
- Build a Docker image that includes the seeded MongoDB data
- Tag the image with the short commit SHA
- Push the image to GitHub Container Registry (GHCR)
- Update the image tag reference in the `app-config` repository (`mongodb-version.txt`)

---

## 🧠 Purpose

This repository’s primary purpose is to manage the seed data used to generate a consistent, reusable MongoDB image for local development and testing.

---

## 🌱 Seed Data

The seed data is stored in `seed-data/init.js`, which is executed on first container startup using MongoDB's initialization script mechanism. It inserts records into the `insurances` collection in the `test` database.

---

## 🔧 Required Environment Variables

No custom environment variables are required to run the pipeline.  
GitHub’s built-in `GITHUB_TOKEN` is used for CI operations.  
A personal access token (PAT) must be added to the repository secrets as `APP_CONFIG_PAT` to allow cross-repository commits to `app-config`.

---

## 🔁 CI/CD Pipeline

The GitHub Actions pipeline is triggered on every push to the `main` branch.

### Pipeline stages:

1. **Checkout the code**
2. **Set up Docker Buildx and QEMU** for multi-architecture builds
3. **Build and push** the Docker image to GHCR for both `amd64` and `arm64` platforms
4. **Extract the short commit SHA**
5. **Update the `app-config` repo** with the new tag (written to `mongodb-version.txt`)

---

### 🧪 Quick Test Commands

```bash
# Run the MongoDB image locally
docker run -d --name mongo-test -p 27017:27017 ghcr.io/ynon24/mongo-dev:<tag>

# Connect using mongosh
mongosh mongodb://localhost:27017

# Inside the Mongo shell:
show collections
db.insurances.find().pretty()

