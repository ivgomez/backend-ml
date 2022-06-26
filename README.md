This is a [Node](https://nextjs.org/) project bootstrapped with [`npm init`](https://docs.npmjs.com/cli/v8/commands/npm-init).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3005](http://localhost:3005) and us [Postman](https://www.postman.com/) or any other API platform to test the endpoints

## Environments

- Localhost: `http://localhost:3005`
- Staging:  `https://backend-ml.azurewebsites.net`

## Endpoints

### Search

- `https://backend-ml.azurewebsites.net/api/items?q={query}`

### Product Detail

- `https://backend-ml.azurewebsites.net/api/items/{IdProduct}`

## Documentation

- Swagger: https://backend-ml.azurewebsites.net/api-docs/
- API doc: https://github.com/ivgomez/backend-ml/wiki/API-Documentation

## Libraries

- [Nodemon](https://nodemon.io/) - Utility to monitor any change in your source and automatically restart your server.
- [Express](https://expressjs.com/) - minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- [Axios](https://axios-http.com/) - Promise based HTTP client for the browser and node.js
- [swagger Jsdoc](https://github.com/Surnet/swagger-jsdoc) - A library that reads your JSDoc-annotated source code and generates an OpenAPI (Swagger) specification.
- [Typescript](https://www.typescriptlang.org/) - Strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
- [Dotenv](https://www.npmjs.com/package/dotenv) - Zero-dependency module that loads environment variables from a .env file into process.env.
- [TS Node](https://typestrong.org/ts-node/) - TypeScript execution and REPL for node.js
