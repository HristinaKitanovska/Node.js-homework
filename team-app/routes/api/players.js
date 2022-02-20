var express = require('express');
var router = express.Router();
const controller = require('../../controller/api/players');

router.get('/', controller.getAll)
      .post('/', controller.postCreate)
      .patch('/', controller.getUpdate)
      .delete('/', controller.getDeleted)

module.exports = router;