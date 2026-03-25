let num = "";
document.addEventListener("keydown", function (event) {
  num += event.key; //varje keydown event -> samlas i key -> fyller tomma code strängen

  if (num.includes("1337")) {
    document.getElementById("easterEgg2-modal").style.display = "flex";
    num = "";
  }
});

document.addEventListener("click", function () {
  const closeButton = document.querySelector(".close-btn");
  document.getElementById("easterEgg2-modal").style.display = "none";
  console.log("Easter egg unlocked");
});
