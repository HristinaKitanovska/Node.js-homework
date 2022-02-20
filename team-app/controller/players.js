const mongoose = require('mongoose');
const Player = require('../models/player');
const Club = require('../models/club');
const Agent = require('../models/agent');

module.exports = {
    getAll: async (req, res) => {
        const players = await Player.find().populate('club', 'name').populate('agent');
        res.render('players/index', { players });
    },
    getCreate: async (req, res) => {
        const clubs = await Club.find();
        const agents = await Agent.find();

        res.render('players/create', { clubs, agents });
    },
    postCreate: async (req, res) => {
      if (req.body.club == '') {
        req.body.club = null;
      }

      if (req.body.agent == '') {
        req.body.agent = null;
      }

        const player = await Player.create(req.body);

        if (req.body.club) {
            await Club.findByIdAndUpdate(req.body.club, {
              $push: { players: player }
            });
          }

          if (req.body.agent) {
            await Agent.findByIdAndUpdate(req.body.agent, {
              $push: { players: player }
            });
          }
        
        res.redirect('/players');
    },
    getUpdate: async (req, res) => {
        const player = await Player.findById(req.params.id).populate('club');
        const clubs = await Club.find();
        const agents = await Agent.find();

        res.render('players/edit', { player, clubs, agents });
    },
    postUpdate: async (req, res) => {
        if(req.body.club == '') {
            req.body.club = null;
        }

        if (req.body.agent == '') {
          req.body.agent = null;
        }

        const player = await Player.findByIdAndUpdate(req.params.id, req.body);

        if (req.body.club) {
            let foundPlayers = await Club.find({ players: player });
      
            if (foundPlayers.length == 0) {
              await Club.findByIdAndUpdate(req.body.club, {
                $push: { players: player }
              });
            }
          }

          if (req.body.agent) {
            let foundPlayers = await Agent.find({ players: player });
      
            if (foundPlayers.length == 0) {
              await Agent.findByIdAndUpdate(req.body.agent, {
                $push: { players: player }
              });
            }
          }


        res.redirect('/players');
    },
    getDeleted: async (req, res) => {
        await Player.findByIdAndDelete(req.params.id);
        res.send({})
    }

}