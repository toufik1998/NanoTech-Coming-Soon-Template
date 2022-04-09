// COUNTDOWN COUNTER
let countDate = new Date("Apr 3, 2023 14:59:59").getTime();

let counter = setInterval(() => {
  let dateNow = new Date().getTime();

  let difference = countDate - dateNow;

  // get time unites
  let days = Math.floor(difference / (1000 * 60 * 60 * 24));

  let hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );

  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

  let seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days;
  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".seconds").innerHTML = seconds;

  if (difference <= 0) {
    clearInterval(counter);
  }
}, 1000);

// NUMBER OF PROJECTS
let allCircle = document.querySelectorAll(".add-num");
let section = document.querySelector(".one");
let started = false;

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    if (!started) {
      allCircle.forEach((ele) => startCount(ele));
    }
    started = true;
  }
};

function startCount(ele) {
  let goal = ele.dataset.circle;

  let countTwo = setInterval(() => {
    ele.textContent++;

    if (ele.textContent == goal) {
      clearInterval(countTwo);
    }
  }, 3000 / goal);
}

// validate form for section contact
let rgName = document.getElementById("username");
let inputEmail = document.getElementById("temail");
let textarr = document.getElementById("textmessage");
let showInvalid = document.getElementById("show-invalid");
let regForm = document.getElementById("form");
const rgxEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
let rgbx = /^[a-zA-Z0-9 ]*$/;

regForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let emValue = inputEmail.value;
  let userValue = rgName.value;
  if (rgxEmail.test(emValue) && rgbx.test(userValue)) {
    showInvalid.innerHTML = "correct form => success";
  } else {
    showInvalid.innerHTML = "your form is incorrect";
  }
});

// validate email of section subscribe
let btnSubmit = document.getElementById("form-email");
let inputAddon = document.getElementById("addon-input");
let validMsg = document.querySelector(".input-mail");
console.log(validMsg);
console.log(inputAddon);
console.log(btnSubmit);
btnSubmit.addEventListener("submit", (e) => {
  let inputVal = inputAddon.value;
  if (rgxEmail.test(inputVal)) {
    validMsg.innerHTML = "Your email is correct";
  } else {
    validMsg.innerHTML = "Your email is not correct";
  }
  e.preventDefault();
});
