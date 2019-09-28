let inputs = document.querySelectorAll(".field[required]");
console.log(inputs);
window.addEventListener("load", inputs[0].focus());

inputs.forEach(function(input) {
  input.addEventListener("input", function() {
    console.log(`user type ${input}`);
  });
  input.addEventListener("blur", function(event) {
    const element = event.target;
    element.setCustomValidity("");
    let isValid = element.checkValidity();
    if (!isValid) {
      element.setCustomValidity(setErrorMsg(element));
      element.classList.add("invalid");
    } else {
      element.setCustomValidity("");
      element.classList.remove("invalid");
    }
  });
});
const setErrorMsg = element => {
  let errorMsg;
  switch (element.name) {
    case "name":
      errorMsg = "Insert your name";
      break;
    case "email":
      errorMsg = "We need your email to avoid duplication!";
      break;
    case "age":
      console.log("element");
      if (element.value < 18) {
        errorMsg = "sorry, we cannot accept your application!";
      } else if (element.Validity.ValueMissing) {
        errorMsg = "We need to know how old you are!";
      }
      break;
    default:
      errorMsg = "please varify this field";
      break;
  }
  return errorMsg;
};
