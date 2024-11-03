let UserModel = require('../models/users');

module.exports.list = async function (req, res, next) {
    try {
        const users = await UserModel.find();
        res.json({
            success: true,
            data: users
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports.userGet = async function (req, res, next) {
    try {
        let uID = req.params.id;
        const user = await UserModel.findById(uID);
        res.json(user);
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports.create = async function (req, res, next) {
    try {
        let newUser = new UserModel(req.body);
        await newUser.save();
        res.json({
            success: true,
            message: 'User created successfully.'
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports.update = async function (req, res, next) {
    try {
        let uID = req.params.id;
        const updatedUser = await UserModel.findByIdAndUpdate(uID, req.body, { new: true });
        res.json({
            success: true,
            message: 'User updated successfully.',
            data: updatedUser
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports.remove = async function (req, res, next) {
    try {
        let uID = req.params.id;
        await UserModel.findByIdAndDelete(uID);
        res.json({
            success: true,
            message: 'User deleted successfully.'
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};