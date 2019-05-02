const { compileFeedbackForm } = require('../services/questions-service');

const QuestionController = async (req, res) => {
  let response = await compileFeedbackForm();
  res.send(response);
}

module.exports = {
  QuestionController,
}