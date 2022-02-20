const mongoose = require('mongoose');
const Player = require('../models/player');
const Agent = require('../models/agent');

module.exports = {
    getAll: async (req, res) => {
        const agents = await Agent.find().populate('players')

        res.render('agents/index', { agents })
    },
    getCreate: async (req, res) => {
        const agents = await Agent.find();
        const players = await Player.find();

        res.render('agents/create', { agents, players });
    },
    postCreate: async (req, res) => {
        await Agent.create(req.body);
        
        res.redirect('/agents');
    },
    getUpdate: async (req, res) => {
        const agent = await Agent.findById(req.params.id);

        res.render('agents/edit', { agent });
    },
    postUpdate: async (req, res) => {
        await Agent.findByIdAndUpdate(req.params.id, req.body);
    
        res.redirect('/agents');
    },
    getView: async (req, res) => {
        const agent = await Agent.findById(req.params.id).populate('players');

        res.render('agents/view', { agent });
    },
    getDeleted: async (req, res) => {
        await Agent.findByIdAndDelete(req.params.id);

        res.send({});
    },
}