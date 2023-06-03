import throttle from 'lodash.throttle';

const feedbackFormEl = document.querySelector('.feedback-form');

const objFeedback = {};

try {
  feedbackFormEl.email.value = objFeedback.email = JSON.parse(
    localStorage.getItem('feedback-form-state')
  ).email;
} catch (error) {
  feedbackFormEl.email.value = objFeedback.email = '';
}

try {
  feedbackFormEl.message.value = objFeedback.message = JSON.parse(
    localStorage.getItem('feedback-form-state')
  ).message;
} catch (error) {
  feedbackFormEl.message.value = objFeedback.message = '';
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
  throttle(saveInputInLocalStorage, 500)
);

const submitFunc = function (evt) {
  evt.preventDefault();
  if (!objFeedback.email || !objFeedback.message) {
    return console.log('Заповніть усі поля');
  }
  console.log(objFeedback);
  localStorage.removeItem('feedback-form-state');
  feedbackFormEl.email.value = objFeedback.email = '';
  feedbackFormEl.message.value = objFeedback.message = '';
  console.log(objFeedback);
};

feedbackFormEl.addEventListener('submit', submitFunc);

console.log(objFeedback);
