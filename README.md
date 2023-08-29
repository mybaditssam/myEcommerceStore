# Ecommerce Store!
Welcome to the Ecommerce project! This project aims to provide a foundation for building an ecommerce application with a MySQL database backend. It includes functionality for managing categories, products, product tags, and tags. 

## Table of Contents
- Setup
 - Database Setup
 - Environment Variables
- Usage
 - Connection
 - Server
- Components
 - Routes
 - Models
 - Seeds

## Setup
### Database Setup
Before you begin, make sure you have MySQL installed on your system. In the project, there are SQL commands to create and manage the database.

### Environment Variables
Create a .env file in the root directory to store your environment variables.

## Usage
### Connection
The connection.js file sets up the Sequelize connection to the MySQL database. If you have a JawsDB connection URL, it will use that; otherwise, it will use the local MySQL server.

### Server
The server.js file configures an Express server to handle HTTP requests. It uses the Sequelize connection to sync models to the database and then starts the server.

- To start the server, run:
"node server.js"

## Components
### Routes
The routes module contains API routes for managing categories, products, product tags, and tags. You can find these routes in the routes directory.

### Models
The models module defines Sequelize models for categories, products, product tags, and tags. These models provide the structure for interacting with the database tables.

### Seeds
The seeds module contains seed data for categories, products, product tags, and tags. Running the seed files will populate the database with initial data for testing and development purposes.

### Conclusion
This project provides a basic structure for building an ecommerce application with a MySQL database. You can extend and customize it to suit your specific requirements. If you have any questions or need further assistance, feel free to reach out!

## Demo

https://github.com/mybaditssam/myEcommerceStore/assets/127529427/2042c851-5a53-410d-adba-dee25e2b3cca


