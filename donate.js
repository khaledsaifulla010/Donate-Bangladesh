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
