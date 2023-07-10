// const submitBtn = document.querySelector('button[type="submit"]');
// const firstName = document.querySelector('input[name="first-name"]');
// const lastName = document.querySelector('input[name="last-name"]');
// const email = document.querySelector('input[name="email"]');
// const phone = document.querySelector('input[name="phone-number"]');
// const password = document.querySelector('input[name="password"]');
// const passwordConfirmation = document.querySelector(
//   'input[name="password-confirm"]'
// );
// const phoneXMark = document.querySelector(".phone-number .fa-xmark");
// const passwordXMark = document.querySelector(".password .fa-xmark");
// const confirmationXMark = document.querySelector(".password-confirm .fa-xmark");

// const validationPatterns = {
//   telephone: new RegExp(/^[0-9]{9}$/),
//   telephone2: new RegExp(/^[+][0-9]{11}$/),
//   password: new RegExp(/^[a-z]{8,}$/),
// };
// const changeToXMark = (icon) => {
//   icon.classList.add("fa-xmark");
//   icon.classList.remove("fa-check");
//   icon.closest("span").classList.add("verify");
//   icon.closest("span").classList.remove("verified");
// };
// const changeToCheckedMark = (icon) => {
//   icon.classList.remove("fa-xmark");
//   icon.classList.add("fa-check");
//   icon.closest("span").classList.add("verified");
// };
// const checkPasswordMatch = () => {
//   if (
//     password.value === passwordConfirmation.value &&
//     passwordConfirmation.value !== ""
//   ) {
//     changeToCheckedMark(confirmationXMark);
//   } else {
//     changeToXMark(confirmationXMark);
//   }
// };

// password.addEventListener("input", checkPasswordMatch);
// passwordConfirmation.addEventListener("input", checkPasswordMatch);
// password.addEventListener("input", (e) => {
//   if (validationPatterns.password.test(e.target.value)) {
//     changeToCheckedMark(passwordXMark);
//   } else {
//     changeToXMark(passwordXMark);
//   }
// });
// phone.addEventListener("input", (e) => {
//   if (
//     validationPatterns.telephone.test(e.target.value) ||
//     validationPatterns.telephone2.test(e.target.value)
//   ) {
//     changeToCheckedMark(phoneXMark);
//   } else {
//     changeToXMark(phoneXMark);
//   }
// });

const submitBtn = document.querySelector('button[type="submit"]');
const inputs = document.querySelectorAll("input");
const password = document.querySelector('input[name="password"]');
const passwordConfirmation = document.querySelector(
  'input[name="password-confirm"]'
);
const telephoneXMark = document.querySelector(".telephone .fa-xmark");
const passwordXMark = document.querySelector(".password .fa-xmark");
const confirmationXMark = document.querySelector(".password-confirm .fa-xmark");
const patterns = {
  telephone: /^[0-9]{9}$/,
  password: new RegExp(/^^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
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
//try to write validation that operates on "general" vars, so it's less code (one if instead of seperate ones for password and phone num)
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
