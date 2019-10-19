var passwords = Array.prototype.slice.call(document.querySelectorAll('[type="password"]'));

function togglePassword(element) {
  element.type = (event.target.checked) ? 'text' : 'password';
}

window.addEventListener('click', function(event) {
  if(event.target.matches('[name="show-passwords"]')) {
    passwords.forEach(function(password) {
      if(event.target.form === password.form) {
        togglePassword(password);
      }
    });
  }
}, false);