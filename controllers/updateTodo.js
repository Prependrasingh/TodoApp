const Todo = require("../models/ToDo");


exports.UpdateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, name, branch } = req.body;

    const update = await Todo.findByIdAndUpdate(
      id,
      {
        title,
        description,
        name,
        branch,
        updatedAt: Date.now(),
      },
      { new: true }
    );

    if (!update) {
      return res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }

    res.status(200).json({
      success: true,
      data: update,
      message: "Todo updated successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Data not updated",
    });
  }
};