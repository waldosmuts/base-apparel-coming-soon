const emailInput = document.querySelector("#email");
const subscriptionForm = document.querySelector("#subscribe");
const validationMessage = document.querySelector("#validation-message");

subscriptionForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const email = subscriptionForm.email.value;
    if (email) {
        if (email.match(emailFormat)) {
            subscriptionForm.classList.remove("validation-error");
            validationMessage.style.display = "none";
            return true;
        } else {
            subscriptionForm.classList.add("validation-error");
            validationMessage.style.display = "block";
            emailInput.focus();
            return false;
        }
    } else {
        subscriptionForm.classList.add("validation-error");
        validationMessage.style.display = "block";
        emailInput.focus();
        return false;
    }
})