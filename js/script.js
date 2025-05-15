// Greeting based on time of day
function greetUser() {
  const greeting = document.getElementById('greeting');
  const hour = new Date().getHours();
  let message = '';

  if (hour < 12) {
    message = 'Good Morning!';
  } else if (hour < 18) {
    message = 'Good Afternoon!';
  } else {
    message = 'Good Evening!';
  }

  greeting.innerHTML = `<h2>${message}</h2>`;
}

// Toggle dark/light theme
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}

// Toggle project details
function toggleDetails(id) {
  const details = document.getElementById(id);
  if (details.style.display === 'block') {
    details.style.display = 'none';
  } else {
    details.style.display = 'block';
  }
}

// Validate Contact Form
function validateContactForm() {
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  const phonePattern = /^[0-9]{10}$/;

  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    return false;
  }

  if (!phonePattern.test(phone)) {
    alert('Please enter a valid 10-digit phone number.');
    return false;
  }

  return true;
}
