const formRef = document.querySelector('form');
function checkForm(event) {
    event.preventDefault();
    const {elements: { email, password }} = event.currentTarget;
    if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
    console.log({email: email.value, password: password.value});
    event.currentTarget.reset();
}
formRef.addEventListener('submit', checkForm);
