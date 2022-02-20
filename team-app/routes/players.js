var express = require('express');
var router = express.Router();
const controller = require('../controller/players')


router.get('/', controller.getAll)
      .get('/create', controller.getCreate)
      .get('/:id', controller.getUpdate)
      .post('/', controller.postCreate)
      .post('/edit/:id', controller.postUpdate)
      .delete('/:id', controller.getDeleted)

      module.exports = router;