// JavaScript لتحديث التاريخ إلى تاريخ اليوم بشكل تلقائي
document.addEventListener("DOMContentLoaded", function () {
  var currentDateElement = document.getElementById("current-date");
  var today = new Date();
  var formattedDate = today.toLocaleDateString("ar-EG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  currentDateElement.textContent = formattedDate;
});
