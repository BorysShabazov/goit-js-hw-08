import _ from 'lodash';

const feedbackFormEl = document.querySelector('.feedback-form');

const objFeedback = {};

try {
  feedbackFormEl[0].value = objFeedback.email = JSON.parse(
    localStorage.getItem('feedback-form-state')
  ).email;
} catch (error) {
  feedbackFormEl[0].value = objFeedback.email = '';
}

try {
  feedbackFormEl[1].value = objFeedback.message = JSON.parse(
    localStorage.getItem('feedback-form-state')
  ).message;
} catch (error) {
  feedbackFormEl[1].value = objFeedback.message = '';
}

const saveInputInLocalStorage = function (evt) {
  if (evt.target.type === 'email') {
    objFeedback.email = evt.target.value;
  }
  if (evt.target.type === 'textarea') {
    objFeedback.message = evt.target.value;
  }
  localStorage.setItem('feedback-form-state', JSON.stringify(objFeedback));
};

feedbackFormEl.addEventListener(
  'input',
  _.throttle(saveInputInLocalStorage, 500)
);

const submitFunc = function (evt) {
  evt.preventDefault();
  console.log(objFeedback);

  localStorage.removeItem('feedback-form-state');
  feedbackFormEl[0].value = objFeedback.email = '';
  feedbackFormEl[1].value = objFeedback.email = '';
};

feedbackFormEl.addEventListener('submit', submitFunc);
