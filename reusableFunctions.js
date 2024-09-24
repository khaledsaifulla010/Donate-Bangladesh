function getInputFieldById(id) {
  const inputValue = document.getElementById(id).value;

  const inputNumber = parseFloat(inputValue);
  return inputNumber;
}

function getTextFixedValueById(id) {
  const textValue = document.getElementById(id).innerText;
  const textNumber = parseFloat(textValue);
  return textNumber;
}

function getMainBalanceTextValueById() {
  const mainBalanceTextValue =
    document.getElementById("main-balance").innerText;
  const MainBalanceTextNumber = parseFloat(mainBalanceTextValue);
  return MainBalanceTextNumber;
}
