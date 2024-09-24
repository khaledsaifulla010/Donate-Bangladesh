document.getElementById("donation").addEventListener("click", function () {

  document.getElementById("donation").classList.remove("active");
  document.getElementById("donation-history").classList.remove("active");

  
  this.classList.add("active");

  showSectionById("donate-cards");
});
document
  .getElementById("donation-history")
  .addEventListener("click", function () {

    document.getElementById("donation").classList.remove("active");
    document.getElementById("donation-history").classList.remove("active");

    this.classList.add("active");
    showSectionById("donate-history-cards");
  });
