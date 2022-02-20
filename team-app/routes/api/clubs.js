var express = require('express');
var router = express.Router();
const controller = require('../../controller/api/clubs');

router.get('/', controller.getAll)
      .post('/', controller.postCreate)
      .patch('/:id', controller.getUpdate)
      .delete('/:id', controller.getDeleted)

module.exports = router;