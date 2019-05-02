const { updateStatistics } = require('../services/post-answer');

const updateAnswerCounter = async (req, res) => {
  await updateStatistics(req.body.questionId, req.body.answerId);
  res.end();
};

module.exports = {
  updateAnswerCounter,
};
