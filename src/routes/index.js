const express = require('express');

const router = express.Router();
const helloWorldController = require('../controllers/hello-world');
const { addQuestion } = require('../controllers/dummy');
const QuestionController = require('../controllers/questionController');


router.get('/helloworld', helloWorldController.helloWorldController);
router.post('/add', addQuestion);
router.get('/load', QuestionController);



module.exports = router;
