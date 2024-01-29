const { getAll, create, getOne, destroy, update } = require('../controllers/user.controllers');
const express = require('express');

const userRouter = express.Router();

//Static routes
userRouter.route("/")
		.get(getAll)
        .post(create)
        

//Dinamic routes
userRouter.route('/:id')
        .get(getOne)
        .delete(destroy)
        .put(update)
module.exports = userRouter;