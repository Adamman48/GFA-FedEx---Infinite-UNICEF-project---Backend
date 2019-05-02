const express = require('express');

const router = express.Router();
const helloWorldController = require('../controllers/hello-world');
const { addQuestion } = require('../controllers/dummy');
const { updateAnswerCounter } = require('../controllers/post-answer');
const QuestionController = require('../controllers/questionController');

router.get('/helloworld', helloWorldController.helloWorldController);
router.post('/add', addQuestion); // for testing
router.get('/load', QuestionController);
router.put('/update', updateAnswerCounter);

module.exports = router;
