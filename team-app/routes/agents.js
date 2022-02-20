var express = require('express');
var router = express.Router();
const controller = require('../controller/agents')

router.get('/', controller.getAll)
      .get('/create', controller.getCreate)
      .get('/:id', controller.getUpdate)
      .get('/:id/view', controller.getView)
      .post('/', controller.postCreate)
      .post('/edit/:id', controller.postUpdate)
      .delete('/:id', controller.getDeleted)

module.exports = router;