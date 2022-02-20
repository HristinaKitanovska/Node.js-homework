var express = require('express');
var router = express.Router();
const controller = require('../controller/clubs')


router.get('/', controller.getAll)
      .get('/create', controller.getCreate)
      .get('/:id', controller.getUpdate)
      .get('/:id/view', controller.getView)
      .get('/:id/print', controller.print)
      .post('/', controller.postCreate)
      .post('/edit/:id', controller.postUpdate)
      .delete('/:id', controller.getDeleted)

      module.exports = router;
      