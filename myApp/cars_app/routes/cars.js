var express = require('express');
var router = express.Router();

const cars = [
  {
    vehicle: 'Mercedes',
    model: 'C200',
    year: '2019'
  },
  {
    vehicle: 'Opel',
    model: 'Astra',
    year: '2012'
  }
];

router.get('/', (req, res) => {
        res.render('cars/index', { cars });
      })
      .get('/create', (req, res) => {
        res.render('cars/create');
      })
      .post('/create', (req, res) => {
        cars.push(req.body);

        res.redirect('/cars');
      });

module.exports = router;

