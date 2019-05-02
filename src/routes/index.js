const express = require('express');

const router = express.Router();
const helloWorldController = require('../controllers/hello-world');
const { addQuestion } = require('../controllers/dummy');
const { updateAnswerCounter } = require('../controllers/post-answer');

router.get('/helloworld', helloWorldController.helloWorldController);
router.post('/add', addQuestion);
router.put('/update', updateAnswerCounter);


module.exports = router;
