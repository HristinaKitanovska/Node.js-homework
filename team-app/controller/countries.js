// const Country = require('../models/country');

// module.exports = {
//     getAll: async (req, res) => {
//         const countries = await Country.find();

//         res.send({
//             error: false,
//             message: 'All countries from the database',
//             countrie: countries
//         })
//     },
//     getCreate: async (req, res) => {
//         const country = await Country.create(req.body);

//         res.send({
//             error: false,
//             message: 'New country has been created',
//             country: country
//         })
//     },
//     getUpdate: async (req, res) => {
//         await Country.findByIdAndUpdate(req.params.id, req.body);
//         const country = await Country.findById(req.params.id);

//         res.send({
//             error: false,
//             message: `Player with id #${country._id} has been updated`,
//             country: country
//         });
//     },
//     getDeleted: async (req, res) => {
//         await Country.findByIdAndDelete(req.params.id);

//         res.send({})
//     }
// }