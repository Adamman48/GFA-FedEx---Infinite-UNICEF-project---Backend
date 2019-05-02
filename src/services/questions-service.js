const { Question, Answer } = require('../models/feedback-models');

const getQuestions = () => new Promise((resolve, reject) => {
  Question.find({}, (err, result) => {
    if (err) {
      err = 'Database error'
      return reject(err);
    }
    return resolve(result);
  })
})

const getAnswers = (questionId) => new Promise((resolve, reject) => {
  Answer.find({questionId: questionId}, (error, result) => {
    error ? reject(new Error("Database error")) :
      resolve(result);
  });
});

const compileFeedbackForm = async () => {
  let answersArray = await getQuestions().then(result => result.map(value => getAnswers(value).then(result => answersArray.push(result))));
  let questionsArray = await getQuestions().then(result => result);
  return Object.assign({}, {questions: questionsArray, answers: answersArray})
};

module.exports = {
  compileFeedbackForm,
};