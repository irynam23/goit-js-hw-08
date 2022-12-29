import throttle from 'lodash.throttle';

const localStorageKey = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const formData = {};
form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);

const fillContactFormFields = () => {
  const userInfoFromLS = JSON.parse(localStorage.getItem(localStorageKey));

  if (userInfoFromLS === undefined) {
    return;
  }

  for (const prop in userInfoFromLS) {
    form.elements[prop].value = userInfoFromLS[prop];
  }
};
fillContactFormFields();

function onFormData(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

function onSubmitForm(event) {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem(localStorageKey)));
  event.currentTarget.reset();
  localStorage.removeItem(localStorageKey);
}
