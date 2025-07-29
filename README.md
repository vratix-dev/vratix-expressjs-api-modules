# Vratix API Module Library
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](CODE_OF_CONDUCT.md)
![GitHub License](https://img.shields.io/github/license/vratix-dev/api-library)
![NPM Downloads](https://img.shields.io/npm/dm/vratix)


> 🚀 Start building with [Line0](https://line0.dev) today - The first AI pair programmer for Express.js backend services! 🚀 


## TL;DR

Use the `init` command to create a new Node.js project: 
```bash
npx vratix init
```
---
- [Overview](#overview)
- [Installation](#installation)
- [Private Modules](./docs/privateModules/gettingStarted.mdx)
- [Community Modules](#modules)
  - [Auth Basic](./registry/modules/authBasic/README.mdx)
  - [Stripe Subscriptions](./registry/modules/stripeSubscriptions/README.mdx)
  - [Emails (Postmark)](./registry/modules/postmarkEmail/README.mdx)
  - [S3 File Upload](./registry/modules/upload-to-s3/README.mdx)
  - [NGINX Proxy](./docs/nginx.mdx)
- [Configuration](./docs/config.mdx)
- [The CLI](./docs/cli.mdx)
- [License](LICENSE)

## Overview 
We created this library of reusable API modules to simplify API development because we were wasting too much time setting up basic functionality and researching the latest backend best practices.
We wanted a repository of high-quality API modules we can reuse, copy and paste into our projects and have a working backend in seconds. 

Currently, the modules work for **Express.js**, however, we’re actively working to extend compatibility with other backend languages and popular Node.js frameworks. 
We would be more than happy for you to contribute and help us achieve this faster.

> This isn’t just another package; it’s a source code repository you can copy and use — your code, your way.  
The modules are designed to be a solid foundation for any API service, **you should customize them to fit your unique needs**.

**We recommend using our CLI** to import modules into your codebase. It automates file placement, manages external dependencies, sets up database repositories and migrations, and resolves module imports.

## Installation

You’re free to copy and use any code from this API Module Library — it's designed to be a foundation you can build on.

To simplify setup and integration, we created a CLI tool that helps you start new projects or integrate our API Modules into existing ones. 
The CLI handles imports, configurations, and dependencies automatically, so you can get up and running in minutes.

### Start a New Project

Use the `init` command to create a new Node.js project or configure an existing one. 
Add the `-c` flag to specify a custom folder, or the CLI will set up the project in the current directory:

```bash
npx vratix init
```

### Configure Your Project

The CLI will prompt you with a few questions to configure your project and create `./config/modules.json`:

```txt showLineNumbers
Select your package manager: › pnpm
What database are you going to use: › PostgreSQL
Select your schema validator: › zod
Should we set up Docker containers for this service (docker-compose.yaml): › no / yes 
Should we configure a web proxy for this project (NGINX): › no / yes
```

### Choose API Modules

During setup, select any initial API Modules you’d like to install as part of the project template:

```txt showLineNumbers
☐ Auth (Basic)
☐ Stripe Subscriptions
☐ S3 File Upload
☐ None
```

If you choose "None," you can add modules individually after setup.

### Set Folder Overrides

Customize the paths for main module folders if needed:

```txt showLineNumbers
@components -> /src/components
@routes -> /src/routes
@middleware -> /src/middleware
@utils -> /src/utils
```

> **Note**: Any folder overrides will still be located within `/src`.

### Ready To Go

Once setup is complete, to start your service run:

```bash
npm run dev:local
```

If you are using docker you can run your service container with: 

```bash
docker compose up -d --build
```
> Check [Deployment](/docs/deploy) for detailed guides.

#### To add additional modules after the initial setup, use:

```bash
npx vratix add <module>
```

## Build with AI

You can now build all your express.js API services using AI at [Line0](https://line0.dev), it uses the API modules from this library and helps you get a fully working service in a few prompts. Try it out today and let us know what you build with it! 
