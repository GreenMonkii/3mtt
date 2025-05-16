# Mini Project Assessment - Simple REST API with Express.js

## Objective
The goal of this project is to create a simple REST API using Express.js, demonstrating an understanding of Node.js, Express.js, and RESTful API principles.

## Project Structure
```
node-js
└── mini-project-assessment
    ├── src
    │   ├── app.js
    │   ├── routes
    │   │   └── items.js
    │   ├── controllers
    │   │   └── itemsController.js
    │   ├── middleware
    │   │   └── errorHandler.js
    │   └── data
    │       └── items.js
    ├── package.json
    ├── README.md
    └── .gitignore
```

## Setup Instructions

1. **Clone the Repository**
   ```
   git clone <repository-url>
   cd mini-project-assessment
   ```

2. **Install Dependencies**
   ```
   npm install
   ```

3. **Run the Application**
   ```
   npm start
   ```

   The application will start on `http://localhost:3000`.

## API Documentation

### Base URL
`http://localhost:3000`

### Endpoints

#### 1. GET / 
Returns a "Hello, World!" message.

**Response:**
```json
{
  "message": "Hello, World!"
}
```

#### 2. GET /items
Retrieves all items.

**Response:**
```json
[
  {
    "id": 1,
    "name": "Item 1",
    "description": "Description for Item 1"
  },
  ...
]
```

#### 3. GET /items/:id
Retrieves a single item by ID.

**Response:**
```json
{
  "id": 1,
  "name": "Item 1",
  "description": "Description for Item 1"
}
```

#### 4. POST /items
Creates a new item.

**Request Body:**
```json
{
  "name": "New Item",
  "description": "Description for New Item"
}
```

**Response:**
```json
{
  "id": 2,
  "name": "New Item",
  "description": "Description for New Item"
}
```

#### 5. PUT /items/:id
Updates an item by ID.

**Request Body:**
```json
{
  "name": "Updated Item",
  "description": "Updated description"
}
```

**Response:**
```json
{
  "id": 1,
  "name": "Updated Item",
  "description": "Updated description"
}
```

#### 6. DELETE /items/:id
Deletes an item by ID.

**Response:**
```json
{
  "message": "Item deleted successfully"
}
```

## Example Requests
You can use tools like Postman to test the API endpoints. Here are some example requests:

- **GET all items:** `GET http://localhost:3000/items`
- **GET item by ID:** `GET http://localhost:3000/items/1`
- **POST new item:** `POST http://localhost:3000/items` with body as shown above.
- **PUT update item:** `PUT http://localhost:3000/items/1` with body as shown above.
- **DELETE item:** `DELETE http://localhost:3000/items/1`

## Error Handling
The API implements error handling for invalid routes and requests, returning appropriate HTTP status codes and meaningful error messages.

## Conclusion
This project demonstrates the ability to create a simple REST API using Express.js, adhering to RESTful principles and providing a clear structure for managing items.