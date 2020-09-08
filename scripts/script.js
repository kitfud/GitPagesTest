var header = document.getElementById("header");

header.onclick = function() {
  if (header.style.color == "white") {
    header.style.color = "lightBlue";
  } else {
    header.style.color = "white";
  }
}