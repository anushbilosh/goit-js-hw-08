const formElem = document.querySelector('.login-form')
formElem.addEventListener('submit', handleSubmit)

function handleSubmit (event) {
    event.preventDefault();
    const form = event.target;
    const emailEl = form.elements.email.value.trim();
    const passwordEl = form.elements.password.value.trim();
    const formData = {
        email: emailEl,
        password: passwordEl,
      };
    if (emailEl === "" || passwordEl === "") {
        alert ('All form fields must be filled in');
        return
      }
      console.log(formData);
      form.reset();
}