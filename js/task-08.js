const form = document.querySelector('.login-form');
form.addEventListener('submit',onClickSubmit);
function onClickSubmit(event) {
   event.preventDefault();
   const {
      elements: { email, password }
   } = event.currentTarget;
   if (email.value === "" || password.value === "") {
      return alert('Please fill these fields!!!!!!!')
   }
   const formData = {
      email: email.value,
      password: password.value
   }
   console.log(formData);
   event.currentTarget.reset()
}