function editNav() {
    var x = document.querySelector(".entete");
    var icon = document.querySelector(".icon");
    if (x.className === "entete") {
      x.className += " responsive";
  } else {
      x.className = "entete";
  }
}
export default editNav;