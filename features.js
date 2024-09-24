document.getElementById("donation").addEventListener("click", function () {
  showSectionById("donate-cards");
});
document
  .getElementById("donation-history")
  .addEventListener("click", function () {
    console.log("donation");
    showSectionById("donate-history-cards");
  });
