const { compileFeedbackForm } = require('../services/questions-service');

const QuestionController = (req, res) => {
 
  GetTheQuestions()
    .then((result) =>  res.json(result))
    .catch((err) => console.info(err))
}

module.exports = QuestionController;