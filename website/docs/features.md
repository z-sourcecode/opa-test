---
sidebar_position: 8
---

# Features

## Version 0.2

| Feature | Scope  | Description |
| :- | :- | :- |
| **Dynamic environment provider provisioning** | Platform Engineer | Create unlimited number of providers on multiple accounts and regions |
| **ECS environment provider** | Platform Engineer | Create an ECS(Elastic container servicer) based provider |
| **Serverless environment provider** | Platform Engineer | Create a serverless based provider |
| **Abstracted AWS environment** | Platform Engineer | Create a environment of which applications and resources can be created |
| **Application pipeline** | Platform Engineer | Create a pipeline for each application to support IAC provisioning and code change stage |
| **Environment Deployment pipeline** | Platform Engineer | Create a pipeline to deploy the code base of an application to another environment |
| **Resource Binding** | Platform Engineer | Allow Binding resources to application to provide access and sharing capabilities for AWS resources |
| **Deploy to additional environments** | Platform Engineer | Allow the deployment of an application to additional environments |
| **Environments selector** | Platform Engineer | Toggle between the environments of which the application is deployed and present relevant information for the current selected environment |
| **Segregated auditing** | Platform Engineer | Audit actions from platform and pipeline to a segregated auditing table of the target environment |
| **Environment level** | Platform Engineer | Allow to define a number representing the level of the environment thus creates hierarchies that are used for deployments |
| **Deployment requires approval** | Platform Engineer | Configure how the pipelines should execute against an environment automatic / require approval |
| **Delete app** | Platform Engineer | Remove an application from an environment |
| **Delete provider** | Platform Engineer | Remove a provider |
| **Centralized pipelines** | Platform Engineer | Load pipelines dynamically from a centralized repository  |
| **Component Pending page** | Platform Engineer | Present a partial page while the component IAC pipeline is still processing  |
| **Terraform/CDK pipelines** | Platform Engineer | Support both terraform and CDK pipelines to provision resources  |




## Coming up

| Feature | Scope  | Description | Timeline
| :- | :- | :- | :- |
| **EKS environment provider** | Platform Engineer | Create a Kubernetes based provider | Jan 2024 |
| **Environment Binding** | Platform Engineer | Bind Environments to allow network communication across multiple VPC's through AWS Transit gateway | February 2024 |


## Provided examples and templates
| Feature | Description | Type |
| :- | :- | :- |
| AWS ECS Environment Provider | a provider IAC for ECS runtime | Provider |
| AWS Serverless Environment Provider | a provider IAC for Serverless runtime | Provider |
| AWS RDS Database | an RDS database template | Resource |
| Node.js Terraform Web App | a node.js application provisioning by terraform | Application |
| Node.js Express Web App With RDS | a node.js application with a baked in starter code to connect to RDS database | Application |
| Node.js Express Web App | a node.js application | Application |
| Python Flask starter application | a python flask web server application | Application |
| Serverless REST API (TypeScript) | a lambda based serverless REST API application template for typescript | Application |
| Java Spring Boot Web Service | a java springboot application | Application |

## Backlog

| Feature | Scope  | Description |
| :- | :- | :- |