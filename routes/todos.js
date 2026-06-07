const express = require("express");
const router = express.Router();


const { createTodo } = require("../controllers/createTodo");
const { getTodo , getTodoById} = require("../controllers/getTodo");
const { UpdateTodo } = require("../controllers/updateTodo");
const { deleteTodo } = require("../controllers/deleteTodo");



router.post("/createTodo", createTodo);
router.get("/getTodo", getTodo);
router.get("/getTodo/:id", getTodoById);
router.put("/updateTodo/:id", UpdateTodo);
router.delete("/deleteTodo/:id", deleteTodo);

module.exports = router;