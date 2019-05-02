const { initQuestion } = require('../services/dummy');
const { Question } = require('../models/feedback-models');

const addQuestion = (req, res) => {
  let valami = initQuestion(req.body)
  valami.save();
  res.end()
};

module.exports = {
  addQuestion,
};
