# Micro-Frontend + Spring Boot

## What is it?

This project is a simple implementation of Micro-Frontends using [React](https://reactjs.org/) + [Single SPA](https://single-spa.js.org/).  
The backend built using [Spring Boot](https://spring.io/projects/spring-boot) serves the Frontend application and its import map file as well as some endpoints that calls some [Star Wars API](https://swapi.dev/) endpoints.

## How to Run

### Build

If you have the [Maven](https://maven.apache.org/) installed in your machine use the following command:  
`mvn package`

If you do not have the Maven installed in your machine, you can run with the Maven Wrapper by using the following command:

#### Windows

`./mvnw package`

#### Unix

`mvnw package`

### Run

Assuming that you have at least the JRE installed in your machine, after the build, you will navigate to the target folder generated by the build process and run the following command:  
`java -jar star-wars-0.0.1-SNAPSHOT.jar`  
When the server is up, you can access http://localhost:8080/.
