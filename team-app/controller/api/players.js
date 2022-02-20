const Player = require('../../models/player');

module.exports = {
    getAll: async (req, res) => {
        const players = await Player.find();
        res.send({
            error: false,
            message: 'All players from database',
            players: players
        });
    },
    postCreate: async (req, res) => {
        const player = await Player.create(req.body);
        res.send({
            error: false,
            message: 'New player has been created',
            player: player
        });
    },
    patchUpdate: async (req, res) => {
        await Player.findByIdAndUpdate(req.params.id. req.body);
        const player = await Player.findById(req.params.id);
        res.send({
            error: false,
            message: `Player with id #${player._id} has been updated`,
            player: player
        });
    },
    deletePlayer: async(req, res) => {
        await Player.findByIdAndDelete(req.params.id);
        res.send({
            error: false,
            message: `Player with id #${req.params.id} has been deleted`
        });
    }
}