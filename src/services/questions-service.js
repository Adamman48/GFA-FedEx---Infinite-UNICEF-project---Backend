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

const compileFeedbackForm = () => {
  
  getQuestions().then(result => result.map(value => getAnswers(value)))

};

module.exports = {
  compileFeedbackForm,
};