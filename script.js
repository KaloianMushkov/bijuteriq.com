const button = document.querySelector('#send-email-button');
button.addEventListener('click', sendEmail);
function sendEmail() {
    const email = 'kaloian.mushkov@gmail.com';
    const subject = '';
    const body = '';
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }
  

