const { updateAnswers } = require('../services/post-answer');

const updateAnswerCounter = async (req, res) => {
  await updateAnswers(req.body.answers);
  res.end();
};

module.exports = {
  updateAnswerCounter,
};
