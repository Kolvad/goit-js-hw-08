import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const emailInput = formRef.querySelector('[name="email"]');
const messageInput = formRef.querySelector('[name="message"]');

const STORAGE_KEY = 'feedback-form-state';

formRef.addEventListener(
  'input',
  throttle(() => {
    const formData = {
      email: emailInput.value,
      message: messageInput.value,
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }, 500)
);

const savedFormData = localStorage.getItem(STORAGE_KEY);

if (savedFormData) {
  const formData = JSON.parse(savedFormData);
  emailInput.value = formData.email;
  messageInput.value = formData.message;
} else {
  emailInput.value = '';
  messageInput.value = '';
}

formRef.addEventListener('submit', event => {
  event.preventDefault();

  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };

  localStorage.removeItem(STORAGE_KEY);

  emailInput.value = '';
  messageInput.value = '';

  console.log(formData);
});
