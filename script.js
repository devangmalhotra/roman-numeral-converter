const inputField = document.getElementById("input");
const convertButton = document.getElementById("convert-btn");
let output = document.getElementById("output");

const arabicToRoman = () => {
  let inputVal = inputField.value;
  console.log(inputVal);
}

const isValid = () => {
  let inputVal = inputField.value;
  if (inputVal < 0) { //negative val
    alert("Please enter a number greater than or equal to 1");
  } else if (inputVal >= 4000) {
    alert("Please enter a number less than or equal to 3999")
  }
}

convertButton.addEventListener("click", arabicToRoman);