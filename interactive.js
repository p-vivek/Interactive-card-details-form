const Input = document.querySelectorAll("input");
const FormData = document.querySelectorAll(".formData");
const Form = document.querySelector("form");
const Modal = document.querySelector(".modale");

function isNumeric(value) {
  return /^-?\d+$/.test(value);
}

function validate() {
  let validation = 0;
  if (Input[0].value.length < 1) {
    FormData[0].setAttribute("data-error-visible", "true");
    Input[0].style.border = "1px solid red";
  } else {
    FormData[0].setAttribute("data-error-visible", "false");
    Input[0].style.border = "1px solid hsl(246, 25%, 77%)";
    validation++;
  }

  for (let i = 1; i < 5; i++) {
    console.log(Input[i].value);
    if (Input[i].value.length < 1 || !isNumeric(Input[i].value)) {
      FormData[i].setAttribute("data-error-visible", "true");
      Input[i].style.border = "1px solid red";
      Input[i].classList.remove("marge");
      Input[i].classList.remove("little-marge");
    } else {
      FormData[i].setAttribute("data-error-visible", "false");
      Input[i].style.border = "1px solid hsl(246, 25%, 77%)";
      validation++;
    }
  }

  if (validation < 5) {
    return false;
  } else {
    Form.classList.remove("appear");
    Form.classList.add("disappear");
    Modal.classList.remove("disappear");
    Modal.classList.add("appear");
  }
}
