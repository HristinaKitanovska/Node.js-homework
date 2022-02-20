const mongoose = require('mongoose');

const agentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    players: [{
        type: mongoose.Types.ObjectId,
        ref: 'player',
    }]
}, { timestamps: true });

module.exports = mongoose.model('agent', agentSchema);