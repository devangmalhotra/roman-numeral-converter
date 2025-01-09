const inputField = document.getElementById("input");
const convertButton = document.getElementById("convert-btn");
let output = document.getElementById("output");
let resultRomanString = "";
let resultArabicNum = 0;

const arabicRomanSymbols = [{arabic: 1, roman: "I"}, {arabic: 4, roman: "IV"}, {arabic: 5, roman: "V"}, {arabic: 9, roman: "IX"}, 
{arabic: 10, roman: "X"}, {arabic: 40, roman: "XL"}, {arabic: 50, roman: "L"}, {arabic: 90, roman: "XC"}, {arabic: 100, roman: "C"}, 
{arabic: 400, roman: "CD"}, {arabic: 500, roman: "D"}, {arabic: 900, roman: "CM"}, {arabic: 1000, roman: "M"}];

const isValid = () => {
  let inputVal = inputField.value;
  if (inputVal < 0) { // negative val
    alert("Please enter a number greater than or equal to 1");
  } else if (inputVal >= 4000) {
    alert("Please enter a number less than or equal to 3999");
  } else {
    arabicToRoman(); 
  }
}

const arabicToRoman = () => {
  let inputVal = inputField.value;
  let currIndex = 0;
  //console.log(inputVal);
  
  // Loop through arabicRomanSymbols arr 
  // If inputVal > 1000, resultArabicNum += arabicRomanSymbols[-1].arabic, resultRomanString += arabicRomanSymbols[-1].roman, inputVal -= arabicRomanSymbols[-1].arabic
  // Else, 
  for (let i = 0; i < 10; i++) { // change to while loop after testing
    if (inputVal >= 1000) {
      resultArabicNum += arabicRomanSymbols[arabicRomanSymbols.length - 1].arabic;
      resultRomanString += arabicRomanSymbols[arabicRomanSymbols.length - 1].roman;
      inputVal -= arabicRomanSymbols[arabicRomanSymbols.length - 1].arabic;
      console.log(resultArabicNum);
      console.log(resultRomanString);
      console.log(inputVal);
    } else {
      if (arabicRomanSymbols[currIndex + 1].arabic <= inputVal) {
        currIndex += 1;
        console.log("test");
      } else if (arabicRomanSymbols[currIndex].arabic == inputVal) {
        console.log(inputVal);
        resultArabicNum += arabicRomanSymbols[currIndex].arabic;
        resultRomanString += arabicRomanSymbols[currIndex].roman;
        inputVal -= arabicRomanSymbols[currIndex].arabic;
        console.log(resultArabicNum);
        console.log(resultRomanString);
        //console.log(inputVal);
      }
    }
    //break;
  }
  
}


convertButton.addEventListener("click", isValid);