const express = require('express');

const router = express.Router();
const helloWorldController = require('../controllers/hello-world');
const { addQuestion } = require('../controllers/dummy');


router.get('/helloworld', helloWorldController.helloWorldController);
router.post('/add', addQuestion)


module.exports = router;
