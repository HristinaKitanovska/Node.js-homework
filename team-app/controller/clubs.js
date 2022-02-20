const mongoose = require('mongoose');
const Club = require('../models/club');
const PDFPrinter = require('pdfmake');

module.exports = {
    getAll: async (req, res) => {
        const clubs = await Club.find();
        res.render('clubs/index', { clubs });
    },
    getCreate: async (req, res) => {
        res.render('clubs/create');
    },
    postCreate: async (req, res) => {
        await Club.create(req.body);

        res.redirect('/clubs')
    },
    getUpdate: async (req, res) => {
        const club = await Club.findById(req.params.id);

        res.render('clubs/edit', { club });
    },
    getView: async (req, res) => {
        const club =  await Club.findById(req.params.id).populate('players');

        res.render('clubs/view', { club });
    },
    print: async (req, res) => {
        const club = await Club.findById(req.params.id).populate('players');
      
        var fonts = {
              Roboto: {
                    normal: 'fonts/Roboto-Regular.ttf',
                    bold: 'fonts/Roboto-Medium.ttf',
                    italics: 'fonts/Roboto-Italic.ttf',
                    bolditalics: 'fonts/Roboto-MediumItalic.ttf'
              }
        };
      
        const printer = new PDFPrinter(fonts);
        var fs = require('fs');
      
        let pdfBody = [['Name', 'Position']];
        
        club.players.forEach(player => {
          pdfBody.push([`${player.name} ${player.surname}`, player.position]);
        });
      
        var docDefinition = {
              content: [
                    { text: `Club with id #${club._id}` },
                    { text: `Name: ${club.name}` },
                    `Address: ${club.country}`,
                    'Players:',
                    {
                          table: {
                                body: pdfBody
                          }
                    }
              ]
        };
      
        var pdfDoc = printer.createPdfKitDocument(docDefinition);
        pdfDoc.pipe(fs.createWriteStream('tables.pdf'));
        pdfDoc.end();
      
        res.redirect(`/clubs/${club._id}/view`);
      },
    postUpdate: async (req, res) => {
        await Club.findByIdAndUpdate(req.params.id, req.body);

        res.redirect('/clubs');
    },
    getDeleted: async (req, res) => {
        await Club.findByIdAndDelete(req.params.id);

        res.status(200).send({});
    }
}