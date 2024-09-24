//  For Donate 1
document
  .getElementById("donate_button_1")
  .addEventListener("click", function () {
    // CASH IN
    const donateMoney1 = getInputFieldById("donate-input-1");

    const donateBalance1 = getTextFixedValueById("donate-1");

    if (donateMoney1 > 0) {
      if (donateMoney1 <= 150000) {
        const totalDonateBalance1 = donateMoney1 + donateBalance1;

        document.getElementById("donate-1").innerText = totalDonateBalance1;

        // CASH OUT FROM MAIN BALANCE

        const mainBalance = getMainBalanceTextValueById() - donateMoney1;

        document.getElementById("main-balance").innerText = mainBalance;

        //  DONATION HISTORY
        const currentDate = new Date();
        const time = currentDate.toLocaleTimeString();
        const options = {
          day: "numeric",
          month: "short",
          year: "numeric",
          timeZone: "GMT",
        };
        const formattedDate = currentDate.toLocaleDateString("en-GB", options);

        const p = document.createElement("p");
        p.innerHTML = `
  <span style="color: black; text-align:center; font-size:20px; font-weight:900; margin-left:40px;">${totalDonateBalance1} Taka is Donated for Flood at Noakhali, Bangladesh</span> <br> 
               <span style="margin-left:40px; color: black; ">Date: ${formattedDate} ${time} GMT +0600 (Bangladesh Standard Time)</span>`;

        document.getElementById("donate-history-cards").appendChild(p);
      } else {
        alert("Insufficient Funds!");
      }
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
      if (donateMoney2 <= 150000) {
        const totalDonateBalance2 = donateMoney2 + donateBalance2;

        document.getElementById("donate-2").innerText = totalDonateBalance2;

        // CASH OUT FROM MAIN BALANCE

        const mainBalance = getMainBalanceTextValueById() - donateMoney2;

        document.getElementById("main-balance").innerText = mainBalance;

        //  DONATION HISTORY
        const currentDate = new Date();
        const time = currentDate.toLocaleTimeString();
        const options = {
          day: "numeric",
          month: "short",
          year: "numeric",
          timeZone: "GMT",
        };
        const formattedDate = currentDate.toLocaleDateString("en-GB", options);

        const p = document.createElement("p");
        p.innerHTML = `<span style="color: black; text-align:center; font-size:20px; font-weight:900; margin-left:40px;">${totalDonateBalance2} Taka is Donated for Flood at Noakhali, Bangladesh</span> <br> 
               <span style="margin-left:40px; color: black; ">Date: ${formattedDate} ${time} GMT +0600 (Bangladesh Standard Time)</span>`;

        document.getElementById("donate-history-cards").appendChild(p);
      } else {
        alert("Insufficient Funds!");
      }
    } else {
      alert("Please Give a Valid Number!");
    }

    // INPUT FIELD DELETE
    document.getElementById("donate-input-2").value = "";
  });
//  For Donate 1
document
  .getElementById("donate_button_3")
  .addEventListener("click", function () {
    // CASH IN
    const donateMoney3 = getInputFieldById("donate-input-3");

    const donateBalance3 = getTextFixedValueById("donate-3");

    if (donateMoney3 > 0) {
      if (donateMoney3 <= 150000) {
        const totalDonateBalance3 = donateMoney3 + donateBalance3;

        document.getElementById("donate-3").innerText = totalDonateBalance3;

        // CASH OUT FROM MAIN BALANCE

        const mainBalance = getMainBalanceTextValueById() - donateMoney3;

        document.getElementById("main-balance").innerText = mainBalance;

        //  DONATION HISTORY
        const currentDate = new Date();
        const time = currentDate.toLocaleTimeString();
        const options = {
          day: "numeric",
          month: "short",
          year: "numeric",
          timeZone: "GMT",
        };
        const formattedDate = currentDate.toLocaleDateString("en-GB", options);

        const p = document.createElement("p");
        p.innerHTML = `<span style="color: black; text-align:center; font-size:20px; font-weight:900; margin-left:40px;">${totalDonateBalance3} Taka is Donated for Flood at Noakhali, Bangladesh</span> <br> 
               <span style="margin-left:40px; color: black; ">Date: ${formattedDate} ${time} GMT +0600 (Bangladesh Standard Time)</span>`;

        document.getElementById("donate-history-cards").appendChild(p);
      } else {
        alert("Insufficient Funds!");
      }
    } else {
      alert("Please Give a Valid Number!");
    }

    // INPUT FIELD DELETE
    document.getElementById("donate-input-3").value = "";
  });
