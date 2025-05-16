# PostgreSQL CRUD API with Express.js

This project is a simple RESTful API built with Express.js and PostgreSQL. It allows you to perform CRUD operations on a `users` table.

## Features

- Get all users
- Get a user by ID
- Create a new user
- Update a user
- Delete a user

## Prerequisites

- Node.js
- PostgreSQL

## Database Setup

Run the following SQL to create the `users` table:

```
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  age INTEGER
);
```

## Environment Variables

Create a `.env` file in the root of the project with your PostgreSQL connection details:

```
PGHOST=localhost
PGUSER=your_db_user
PGPASSWORD=your_db_password
PGDATABASE=your_db_name
PGPORT=5432
```

## Install Dependencies

```
npm install
```

## Run the Server

```
npm start
```

## Run Tests

```
npm test
```

## API Endpoints

### Get all users

`GET /users`

### Get a user by ID

`GET /users/:id`

### Create a new user

`POST /users`
Body: `{ "name": "John", "email": "john@example.com", "age": 30 }`

### Update a user

`PUT /users/:id`
Body: `{ "name": "Jane", "email": "jane@example.com", "age": 25 }`

### Delete a user

`DELETE /users/:id`

## Example Requests

See the API documentation above for example requests and responses.
