# typescript-microservice-boilerplate

A boilerplate for TypeScript microservices with 
* Inversify -> Dependency Injection System 
* GraphQL
* Mongoose
* dotenv
* Asynchronous JWT Authentication
* Services, Repositories, Controllers and Middleware Interfaces and examples
* Prometheus Metric Collection Service
* Unit Test Setup
* A Ready State Observer and ReadyStateController pre-included for Kubernetes Healthcheck and other such needs
* Includes a `Dockerfile`


## Get Started
* Clone the repository
* Install the dependencies ( `npm install` )
* Create a copy of `.env.example` to create a `.env` file and modify the properties as needed. 
* RUN using `npm start`
* Open the `/graphql` to access the GraphQL Playground
* The project already includes 2 pre defined routes `/health` and `/ready`. You can refer to these as example Controllers.
* You can refer to `src/app/graphql/resolvers/ExampleResolver.ts`, ``src/app/graphql/AppSchema.ts``, `graphql/typeDefs.graphql` to getstarted with GraphQL.


The project is currently pre-setup for MongoDB with Mongoose for Database but you can setup other Relational Databases behind the abstract Repositories. I have used SQL databases with this boilerplate.
