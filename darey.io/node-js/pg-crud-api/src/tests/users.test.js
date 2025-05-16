const request = require("supertest");
const express = require("express");
const usersRouter = require("../routes/users");
const errorHandler = require("../middleware/errorHandler");

// Mock the db pool
jest.mock("../src/db", () => {
  const mPool = {
    query: jest.fn(),
  };
  return mPool;
});
const pool = require("../db");

const app = express();
app.use(express.json());
app.use("/users", usersRouter);
app.use(errorHandler);

// Sample user data
const user = { id: 1, name: "John", email: "john@example.com", age: 30 };

describe("Users API", () => {
  afterEach(() => jest.clearAllMocks());

  test("GET /users - success", async () => {
    pool.query.mockResolvedValue({ rows: [user] });
    const res = await request(app).get("/users");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([user]);
  });

  test("GET /users/:id - user found", async () => {
    pool.query.mockResolvedValue({ rows: [user] });
    const res = await request(app).get("/users/1");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(user);
  });

  test("GET /users/:id - user not found", async () => {
    pool.query.mockResolvedValue({ rows: [] });
    const res = await request(app).get("/users/2");
    expect(res.statusCode).toBe(404);
    expect(res.body).toHaveProperty("error");
  });

  test("POST /users - create user", async () => {
    pool.query.mockResolvedValue({ rows: [user] });
    const res = await request(app)
      .post("/users")
      .send({ name: "John", email: "john@example.com", age: 30 });
    expect(res.statusCode).toBe(201);
    expect(res.body).toEqual(user);
  });

  test("PUT /users/:id - update user", async () => {
    pool.query.mockResolvedValue({ rows: [user] });
    const res = await request(app)
      .put("/users/1")
      .send({ name: "John", email: "john@example.com", age: 30 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(user);
  });

  test("DELETE /users/:id - delete user", async () => {
    pool.query.mockResolvedValue({ rows: [user] });
    const res = await request(app).delete("/users/1");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("message", "User deleted");
  });

  test("POST /users - invalid data", async () => {
    const res = await request(app)
      .post("/users")
      .send({ name: "", email: "", age: -1 });
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("error");
  });
});
