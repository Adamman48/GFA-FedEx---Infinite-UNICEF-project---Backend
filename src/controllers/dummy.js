const { initQuestion, initAnswer } = require('../services/dummy');

const addQuestion = (req, res) => {
  let valami = initQuestion(req.body)
  let promise = valami.save();
  promise.then(result => initAnswer(req.body, result._id).save())
  res.end()
};

const addAnswer = async (req, res) => {
  await initAnswer(req.body, "5ccb5875abe8611204747931").save()
  res.end()
}

module.exports = {
  addQuestion,
  addAnswer,
};
