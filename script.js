function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function revealMessage() {
  document.getElementById("secret").style.display = "block";
}

function playMusic() {
  document.getElementById("bgMusic").play();
}
