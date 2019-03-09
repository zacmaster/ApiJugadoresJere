const mongoose = require('mongoose')

const PlayerSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    lastname: String,
    age: Number,
    nationality: String,
    number: Number
})


module.exports = mongoose.model('Player', PlayerSchema)