import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('form');
const notificationBtn = document.querySelector('button[type="submit"]');
const inputDelay = document.querySelector('input[name="delay"]');
const fieldset = document.querySelector('fieldset');

notificationBtn.classList.add('js-notification-btn');
inputDelay.classList.add('js-input-delay');
fieldset.classList.add('js-fieldset');

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}

form.addEventListener('submit', e => {
  e.preventDefault();

  const delay = Number(form.elements.delay.value);
  const state = form.elements.state.value;

  createPromise(delay, state)
    .then(delay => {
      iziToast.success({
        title: 'Success',
        message: `Fulfilled promise ${delay}ms`,
        position: 'topRight',
      });
    })
    .catch(delay => {
      iziToast.error({
        title: 'Error',
        message: `Rejected promise ${delay}ms`,
        position: 'topRight',
      });
    });

  form.reset();
});
