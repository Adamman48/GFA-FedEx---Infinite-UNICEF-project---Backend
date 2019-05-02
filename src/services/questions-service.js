const { Question } = require('../models/feedback-models');

const GetTheQuestions = () => new Promise((resolve, reject) => {
  Question.find({}, (err, result) => {
    if (err) {
      err = 'Database error'
      return reject(err);
    }
    return resolve(result);
  })
})

module.exports = GetTheQuestions;