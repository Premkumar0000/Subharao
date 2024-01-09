function submitForm() {
  var emailValue = document.getElementById('m').value;
  var passwordValue = document.getElementById('n').value;

  if (emailValue === '') {
    alert('Enter email');
  }

  if (passwordValue === '') {
    alert('Enter password');
  }
}
