//  For Donate 1
document
  .getElementById("donate_button_1")
  .addEventListener("click", function () {
    // CASH IN
    const donateMoney1 = getInputFieldById("donate-input-1");

    const donateBalance1 = getTextFixedValueById("donate-1");

    if (donateMoney1 > 0) {
      const totalDonateBalance1 = donateMoney1 + donateBalance1;

      document.getElementById("donate-1").innerText = totalDonateBalance1;

      // CASH OUT FROM MAIN BALANCE

      const mainBalance = getMainBalanceTextValueById() - donateMoney1;

      document.getElementById("main-balance").innerText = mainBalance;
    } else {
      alert("Please Give a Valid Number!");
    }

    // INPUT FIELD DELETE
    document.getElementById("donate-input-1").value = "";
  });

//  For Donate 2
document
  .getElementById("donate_button_2")
  .addEventListener("click", function () {
    // CASH IN
    const donateMoney2 = getInputFieldById("donate-input-2");

    const donateBalance2 = getTextFixedValueById("donate-2");

    if (donateMoney2 > 0) {
      const totalDonateBalance2 = donateMoney2 + donateBalance2;

      document.getElementById("donate-2").innerText = totalDonateBalance2;

      // CASH OUT FROM MAIN BALANCE

      const mainBalance = getMainBalanceTextValueById() - donateMoney2;

      document.getElementById("main-balance").innerText = mainBalance;
    } else {
      alert("Please Give a Valid Number!");
    }

    // INPUT FIELD DELETE
    document.getElementById("donate-input-2").value = "";
  });

//  For Donate 3
document
  .getElementById("donate_button_3")
  .addEventListener("click", function () {
    // CASH IN
    const donateMoney3 = getInputFieldById("donate-input-3");

    const donateBalance3 = getTextFixedValueById("donate-3");

    if (donateMoney3 > 0) {
      const totalDonateBalance3 = donateMoney3 + donateBalance3;

      document.getElementById("donate-3").innerText = totalDonateBalance3;

      // CASH OUT FROM MAIN BALANCE

      const mainBalance = getMainBalanceTextValueById() - donateMoney3;

      document.getElementById("main-balance").innerText = mainBalance;
    } else {
      alert("Please Give a Valid Number!");
    }

    // INPUT FIELD DELETE
    document.getElementById("donate-input-3").value = "";
  });
