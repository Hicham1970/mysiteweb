const menuBtn = document.getElementById("menuBt");
const myNav = document.getElementById("sidenav");

// menuBtn.addEventListener("click", () => {

menuBtn.onclick = function () {
  if (myNav.style.right == "-250px") {
    myNav.style.right = "0";
  } else {
    myNav.style.right = "-250px";
  }
};
