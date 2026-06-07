const Todo = require("../models/ToDo");

exports.getTodo = async (req, res) => {
  try {
    // fetch all todo items from database
    const todos = await Todo.find({});

    // response
    res.status(200).json({
      success: true,
      data: todos,
      message: "All data items are fetched successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Error recieved during data fetch",
    });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    const id = req.params.id;

    const todo = await Todo.findById(id);

    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "No data found with the given id",
      });
    }

    res.status(200).json({
      success: true,
      data: todo,
      message: `Data found at the given id ${id}`,
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Error Occurred",
    });
  }
};
