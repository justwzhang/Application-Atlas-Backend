const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const UserSchema = new Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        user: { type: String, required: true },
        email: { type: String, required: true },
        passwordHash: { type: String, required: true },
        security1: { type: String, required: true },
        answer1: { type: String, required: true },
        security2: { type: String, required: true },
        answer2: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('User', UserSchema)
