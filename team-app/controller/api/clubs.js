const Club = require('../../models/club');

module.exports = {
    getAll: async (req, res) => {
        const Clubs = await Clubfind();
        res.send({
            error: false,
            message: 'All clubs from the database',
            Clubs: Clubs
        });
    },
    postCreate: async (req, res) => {
        const club = await Club.create(req.body);
        res.send({
            error: false,
            message: 'New club has been created',
            club: club
        });
    },
    patchUpdate: async (req, res) => {
        await Club.findByIdAndUpdate(req.parama.id, req.body);
        const club = await Club.findById(req.params.id);
        res.send({
            error: false,
            message: `Club with id #${club._id} has been updated`,
            club: club
        });
    },
    deleteClub: async (req, res) => {
        await Club.findByIdAndDelete(req.params.id);
        res.send({
            error: false,
            message: `Club with id #${req.params.id} has been deleted`
        });
    }
}