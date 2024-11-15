const validate = new window.JustValidate("#form");

// validate
let validation = new JustValidate("#form");
validation.addField("#name", [
  {
    rule: "required",
    errorMessage: "Please enter ur name",
  },
  {
    rule: "minLength",
    value: 2,
    errorMessage: "min length must be 2 symbols",
  },
]);
validation.addField("#email", [
  {
    rule: "required",
    errorMessage: "Please enter ur email"
  },
  {
    rule: 'email',
    errorMessage: "This is not email"
  },
]);
validation.addField('#age', [
    {
      rule: 'required',
      errorMessage: 'Please enter ur age'
    },
    {
      rule: 'number',
    },
    {
      rule: 'minNumber',
      value: 18,
      errorMessage: "min age 18 y.o"
    },
    {
      rule: 'maxNumber',
      value: 100,
    },
]);

const showPass = document.getElementById("showPass");
showPass.addEventListener("click", () => {
  const passwordInput = document.getElementById("password");
  const ConfirmPasswordInput = document.getElementById("confirmPassword");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    ConfirmPasswordInput.type = "text";
  } else {
    passwordInput.type = "password";
    ConfirmPasswordInput.type = "password";
  }
});
