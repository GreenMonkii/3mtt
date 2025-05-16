const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

// Get all users
router.get("/", usersController.getAllUsers);

// Get user by ID
router.get("/:id", usersController.getUserById);

// Create new user
router.post("/", usersController.createUser);

// Update user by ID
router.put("/:id", usersController.updateUser);

// Delete user by ID
router.delete("/:id", usersController.deleteUser);

module.exports = router;
