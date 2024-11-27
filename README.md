# Serverless Project

This is a Serverless project that deploys AWS Lambda functions with API Gateway. The project includes a simple "Hello World" function and is configured using the Serverless Framework.

## About

This project is a simple example of how to use the Serverless Framework to deploy AWS Lambda functions and expose them via API Gateway. It demonstrates how to structure Lambda functions, define serverless configurations, and manage deployments.

## Technologies

- **Serverless Framework**: An open-source framework that simplifies the deployment of serverless applications.
- **AWS Lambda**: A serverless compute service to run backend functions.
- **API Gateway**: A fully managed service to create, publish, maintain, monitor, and secure APIs.
- **Node.js**: JavaScript runtime used for Lambda functions.
- **TypeScript**: A superset of JavaScript that adds static types.

## Installation

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/)
- [Serverless Framework](https://www.serverless.com/framework/docs/getting-started/) (run `npm install -g serverless`)

### Steps
1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/9309930/ts-monorepo.git
    ```

2. Navigate to the project directory:
    ```bash
    cd ts-monorepo
    ```

3. Install the dependencies:
    ```bash
    yarn install
    ```

## Usage

### Local Development with Serverless Offline
To run the project locally using Serverless Offline, run the following command:
```bash
yarn sls offline
