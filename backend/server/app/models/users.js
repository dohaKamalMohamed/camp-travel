const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const jwt = require('jsonwebtoken');
const config = require('config');


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },

},
    {
        timestamps: true,
    }).plugin(AutoIncrement, { inc_field: 'userID' });

userSchema.methods.generateToken = function () {
    const token = jwt.sign({ _id: this._id, email: this.email }, 'jwtprivatekey');
    return token;
}

const users = mongoose.model('users', userSchema);


console.log('users', users)
exports.User = users;


