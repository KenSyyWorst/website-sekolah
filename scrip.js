// Form Validation for Contact Section
const form = document.getElementById('contactForm');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const errorMessage = document.getElementById('errorMessage');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let isValid = true;
  errorMessage.textContent = ''; // Clear previous error messages

  // Validate Email
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(emailInput.value)) {
    isValid = false;
    errorMessage.textContent += 'Email tidak valid. ';
  }

  // Validate Phone Number
  const phonePattern = /^[+]?[0-9]{10,12}$/;
  if (!phonePattern.test(phoneInput.value)) {
    isValid = false;
    errorMessage.textContent += 'Nomor telepon tidak valid.';
  }

  if (isValid) {
    form.submit();
  }
});