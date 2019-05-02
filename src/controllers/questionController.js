const GetTheQuestions = require('../services/questions-service');

const QuestionController = (req, res) => {
  GetTheQuestions()
    .then((result) => res.json(result))
    .catch((err) => console.error(err))
}

module.exports = QuestionController;