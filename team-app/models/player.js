const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        require: true
    },
    position: {
        type: String,
        required: true
    },
    club: {
       ref: 'club',
       type: mongoose.Types.ObjectId
    },
    agent: {
        ref: 'agent',
        type: mongoose.Types.ObjectId
    }
}, { timestamps: true });

module.exports = mongoose.model('player', playerSchema);