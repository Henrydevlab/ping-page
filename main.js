document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('notifyForm');
  const emailInput = document.getElementById('emailInput');
  const errorOutput = document.getElementById('emailError');
  const inputGroup = emailInput.parentElement;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    validateForm();
  });

  function validateForm() {
    const emailValue = emailInput.value.trim();
    
    // Regular Expression pattern structural match rule for matching name@host.tld syntax
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailValue === '') {
      showError('Whoops! It looks like you forgot to add your email');
    } else if (!emailPattern.test(emailValue)) {
      showError('Please provide a valid email address');
    } else {
      clearError();
      // Optional: Handle form submission payload tracking processing securely here
      alert('Success! You will be notified when we launch.');
      form.reset();
    }
  }

  function showError(message) {
    inputGroup.classList.add('notify-form__input-group--invalid');
    emailInput.classList.add('notify-form__input--error');
    emailInput.setAttribute('aria-invalid', 'true');
    errorOutput.textContent = message;
  }

  function clearError() {
    inputGroup.classList.remove('notify-form__input-group--invalid');
    emailInput.classList.remove('notify-form__input--error');
    emailInput.setAttribute('aria-invalid', 'false');
    errorOutput.textContent = '';
  }

  // Real-time input change optimization to clear invalid state early
  emailInput.addEventListener('input', () => {
    if (inputGroup.classList.contains('notify-form__input-group--invalid')) {
      clearError();
    }
  });
});
