const inputField = document.getElementById("input");
const convertButton = document.getElementById("convert-btn");
let output = document.getElementById("output");

const arabicToRoman = () => {
  let inputVal = inputField.value;
  console.log(inputVal);
}

convertButton.addEventListener("click", arabicToRoman);