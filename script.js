const inputField = document.getElementById("number");
const convertButton = document.getElementById("convert-btn");
let output = document.getElementById("output");
let resultRomanString = "";
let resultArabicNum = 0;

const arabicRomanSymbols = [{arabic: 1, roman: "I"}, {arabic: 4, roman: "IV"}, {arabic: 5, roman: "V"}, {arabic: 9, roman: "IX"}, 
{arabic: 10, roman: "X"}, {arabic: 40, roman: "XL"}, {arabic: 50, roman: "L"}, {arabic: 90, roman: "XC"}, {arabic: 100, roman: "C"}, 
{arabic: 400, roman: "CD"}, {arabic: 500, roman: "D"}, {arabic: 900, roman: "CM"}, {arabic: 1000, roman: "M"}];

const isValid = () => {
  let inputVal = inputField.value;
    if (!output.classList.contains("hidden")) {
      reset();
    }
  if (inputVal < 0) { // negative val
    const resultParagraphEl = document.createElement("p");
    resultParagraphEl.id = "result";
    const node = document.createTextNode("Please enter a number greater than or equal to 1");
    resultParagraphEl.appendChild(node);
    output.appendChild(resultParagraphEl);
    output.classList.remove("hidden");
  } else if (inputVal >= 4000) {
    const resultParagraphEl = document.createElement("p");
    resultParagraphEl.id = "result";
    const node = document.createTextNode("Please enter a number less than or equal to 3999");
    resultParagraphEl.appendChild(node);
    output.appendChild(resultParagraphEl);
    output.classList.remove("hidden");
  } else if (inputVal.length == 0) {
    const resultParagraphEl = document.createElement("p");
    resultParagraphEl.id = "result";
    const node = document.createTextNode("Please enter a valid number");
    resultParagraphEl.appendChild(node);
    output.appendChild(resultParagraphEl);
    output.classList.remove("hidden");
  } else {
    arabicToRoman(); 
    addToOutput();
  }
}

const arabicToRoman = () => {
  let inputVal = inputField.value;
  let currIndex = 0;
 
  while (inputVal > 0) { 
    if (inputVal >= 1000) {
      resultArabicNum += arabicRomanSymbols[arabicRomanSymbols.length - 1].arabic;
      resultRomanString += arabicRomanSymbols[arabicRomanSymbols.length - 1].roman;
      inputVal -= arabicRomanSymbols[arabicRomanSymbols.length - 1].arabic;
    } else {
      if (arabicRomanSymbols[currIndex + 1].arabic <= inputVal) {
        currIndex += 1;
      } else if (arabicRomanSymbols[currIndex].arabic == inputVal || arabicRomanSymbols[currIndex + 1].arabic > inputVal) {
        resultArabicNum += arabicRomanSymbols[currIndex].arabic;
        resultRomanString += arabicRomanSymbols[currIndex].roman;
        inputVal -= arabicRomanSymbols[currIndex].arabic;
        console.log(resultArabicNum);
        console.log(resultRomanString);
        currIndex = 0;
      }
    }
  }
}

const addToOutput = () => {
  const resultParagraphEl = document.createElement("p");
  resultParagraphEl.id = "result";
  const node = document.createTextNode(resultRomanString);
  resultParagraphEl.appendChild(node);
  output.appendChild(resultParagraphEl);
  output.classList.remove("hidden");
}

const reset = () => {
  resultRomanString = "";
  resultArabicNum = 0;
  output.removeChild(output.lastElementChild);
}


convertButton.addEventListener("click", isValid);