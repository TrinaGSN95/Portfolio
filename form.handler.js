document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form');
    const successMessage = document.getElementById('success-message');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent default form submission (redirect)
      
      const formData = new FormData(form);
      const endpoint = 'https://formspree.io/f/xblgwrgv';
  
      // Send form data to Formspree using the fetch API
      fetch(endpoint, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          form.reset(); // Reset the form fields
          successMessage.style.display = 'block'; // Show the success message
        } else {
          alert('There was a problem with the form submission. Please try again.');
        }
      })
      .catch(() => alert('Oops! Something went wrong. Please try again.'));
    });

  });