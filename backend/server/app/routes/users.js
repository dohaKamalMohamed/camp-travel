const express = require('express');
const router = express.Router();
const _ = require('lodash');
const { User } = require('../models/users');


router.get('/', async (req, res, next) => {
    try {
        let users = await User.find()
        return res.send(users)
    } catch (err) {
        next(err);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        let user = await User.findOne({ userID: req.params.id });
        if (!user) {
            return res.send({ result: false, message: "this user is not exist" });
        }
        res.send(user);
    } catch (err) {
        next(err);
    }

});

router.post('/', async (req, res, next) => {
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.send({ result: false, message: "this email is already exist" });
        }
        user = new User(_.pick(req.body, [
            'email',
            'password',
        ]));

        await user.save();
        res.send({result:true,data:user});
    } catch (err) {
        next(err);
    }


});

router.post('/login', async (req, res, next) => {
    try {
        let user = await User.findOne({ email: req.body.email, password: req.body.password });
        if (!user) {
            return res.send({ result: false, message: "Email or Passeword is not correct" });
        }
        const token = user.generateToken();
        res.header('x-auth-token', token).send({
            result:true,
            email: req.body.email,
            token: token
        }

        );
    } catch (err) {
        next(err);
    }


});
module.exports = router;