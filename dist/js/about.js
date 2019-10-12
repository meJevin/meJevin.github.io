const hoverOverElement = document.querySelector("#hover-for-bg-item");
const mainElement = document.querySelector("#about");
const overlayElement = document.querySelector(".overlay");

hoverOverElement.addEventListener("mouseover", hideAboutBG);
hoverOverElement.addEventListener("mouseleave", showAboutBG);

function showAboutBG() {
  mainElement.classList.remove("hide");
  overlayElement.classList.remove("hide");
}

function hideAboutBG() {
  mainElement.classList.add("hide");
  overlayElement.classList.add("hide");
}

setCopyRight();

function setCopyRight() {
  let footer = document.getElementById("main-footer");

  if (footer != null) {
    footer.innerHTML = "Copyright &copy; " + new Date().getFullYear();
  }
}
