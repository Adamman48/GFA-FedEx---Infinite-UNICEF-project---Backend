const { initQuestion, initAnswer } = require('../services/dummy');

const addQuestion = (req, res) => {
  let valami = initQuestion(req.body)
  let promise = valami.save();
  promise.then(result => initAnswer(req.body, result._id).save())
  res.end()
};

const addAnswer = async (req, res) => {
  await initAnswer(req.body, "5ccb5f9f40ef870d98e8bcfe").save()
  res.end()
}

module.exports = {
  addQuestion,
  addAnswer,
};
