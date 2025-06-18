const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: String, required: true},
    duration: {type: String, required: true},
    image: {type: String, required: true},
    packageInclusion: {type: String, required: true}
})

module.exports = mongoose.model('Package', packageSchema);