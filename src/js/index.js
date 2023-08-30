const inputs = document.querySelectorAll("input");
const password = document.querySelector('input[name="password"]');
const passwordConfirmation = document.querySelector(
  'input[name="password-confirm"]'
);
const telephoneXMark = document.querySelector(".telephone .fa-xmark");
const passwordXMark = document.querySelector(".password .fa-xmark");
const confirmationXMark = document.querySelector(".password-confirm .fa-xmark");
const patterns = {
  telephone:
    /^(\+48(\ )?)?(([0-9]{3}(\ )[0-9]{3}(\ )[0-9]{3})|([0-9]{9})|([0-9]{3}\-[0-9]{3}\-[0-9]{3}))$/,
  password: new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
};

const changeToXMark = (icon) => {
  icon.classList.add("fa-xmark");
  icon.classList.remove("fa-check");
  icon.closest("span").classList.add("verify");
  icon.closest("span").classList.remove("verified");
};
const changeToCheckedMark = (icon) => {
  icon.classList.remove("fa-xmark");
  icon.classList.add("fa-check");
  icon.closest("span").classList.add("verified");
};
const checkPasswordMatch = () => {
  if (
    password.value === passwordConfirmation.value &&
    passwordConfirmation.value !== ""
  ) {
    changeToCheckedMark(confirmationXMark);
  } else {
    changeToXMark(confirmationXMark);
  }
};
const checkValidation = (value, input) => {
  if (value === "telephone") {
    if (patterns[value].test(input)) {
      changeToCheckedMark(telephoneXMark);
    } else {
      changeToXMark(telephoneXMark);
    }
  }
  if (value === "password") {
    if (patterns[value].test(input)) {
      changeToCheckedMark(passwordXMark);
    } else {
      changeToXMark(passwordXMark);
    }
  }
};

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    inputName = e.target.attributes.name.value;

    if (inputName === "telephone") {
      checkValidation(inputName, e.target.value);
    } else if (inputName === "password-confirm") {
      checkPasswordMatch();
    } else if (inputName === "password") {
      checkValidation(inputName, e.target.value);
      checkPasswordMatch();
    }
  });
});
