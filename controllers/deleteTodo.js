// const Todo = require("../models/ToDo");

const Todo = require("../models/ToDo");

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    await Todo.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "data deleted successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "server Error Data not deleted",
    });
  }
};
