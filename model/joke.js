const mongoose = require('./mongo')

const TextJokeSchema = new mongoose.Schema({
    ct: { type: String },
    id: { type: String },
    title: { type: String },
    text: { type: String },
    type: { type: Number }
})

TextJokeSchema.statics.getById = function(id) {
    return this.find({ id: id }).exec();
}

module.exports = {
    TextJoke: mongoose.model('TextJoke', TextJokeSchema)
}
