// import the todo schema from the models folder
const todo = require("../models/ToDo");

//define route handler

exports.createTodo = async(req , res) => {
    try{
        const {title , description , name , branch} = req.body;
        const response = await todo.create({title , description , name , branch});
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"Entry successfully"
            }
        )
    }
    catch(err){
    console.error(err);

    res.status(500).json({
        success: false,
        data: "internal server failure",
        message: err.message,
    });
}
}
