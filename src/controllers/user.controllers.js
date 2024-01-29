const catchError = require('../utils/catchError');
const User = require('../models/User');

const getAll = catchError(async(req, res) => {
    const users = await User.findAll();
    return res.json(users);
});

const create = catchError(async(req, res) => {
    const {firstname, lastname, email, password, birthday} = req.body;
    const newBody = {firstname, lastname, email, password, birthday};
    const user = await User.create(newBody);
    return res.status(201).json(user);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if(!user) return res.sendStatus(404);
    return res.json(user);
});

const destroy = catchError(async(req, res) => {
    const { id } = req.params;
    const user =await User.destroy({where: {id}});
    if (!user) return res.sendStatus(404);
    return res.send('user deleted').status(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const {firstname, lastname, email, password, birthday} = req.body;
    const newBody = {firstname, lastname, email, password, birthday};

    const user = await User.findByPk(id);
    if(!user) return res.sendStatus(404);

    const userUpdate = await user.update(
        newBody
    );
    return res.send(userUpdate);
});
module.exports = {
    getAll,
    create,
    getOne,
    destroy,
    update
}