const expandableButtons = document.getElementsByClassName(
  "project-group-expand-btn"
);

window.addEventListener("resize", OnResize);

for (let i = 0; i < expandableButtons.length; ++i) {
  expandableButtons[i].addEventListener("click", event => {
    expandableButtons[i].classList.toggle("expanded");
    var content = expandableButtons[i].nextElementSibling;
    if (content.classList.contains("show")) {
      content.style.maxHeight = "0";
      content.classList.remove("show");
    } else {
      let rowValues = document.defaultView
        .getComputedStyle(content, "")
        .getPropertyValue("grid-template-rows")
        .split(" ");
      let finalContentHeight = expandableButtons[i].clientHeight;

      for (let j = 0; j < rowValues.length; ++j) {
        finalContentHeight += parseInt(rowValues[j].replace("px", ""));
      }

      console.log("COmputed height: " + finalContentHeight);

      content.style.maxHeight = finalContentHeight + "px";
      content.classList.add("show");
    }
  });
}

function OnResize() {
  for (let i = 0; i < expandableButtons.length; ++i) {
    console.log(i);
    var content = expandableButtons[i].nextElementSibling;
    if (content.classList.contains("show")) {
      let rowValues = document.defaultView
        .getComputedStyle(content, "")
        .getPropertyValue("grid-template-rows")
        .split(" ");
      let finalContentHeight = expandableButtons[i].clientHeight;

      for (let j = 0; j < rowValues.length; ++j) {
        finalContentHeight += parseInt(rowValues[j].replace("px", ""));
      }

      if (content.style.maxHeight == finalContentHeight) {
        return;
      }

      console.log(
        "Recomputed: " + content.style.maxHeight + " to " + finalContentHeight
      );

      content.style.maxHeight = finalContentHeight + "px";
    }
  }
}

const infoButtons = document.getElementsByClassName("info-icon");

for (let i = 0; i < infoButtons.length; ++i) {
  let description = infoButtons[i].previousElementSibling;

  infoButtons[i].addEventListener("mouseenter", event => {
    description.classList.add("show");
  });

  infoButtons[i].addEventListener("mouseleave", event => {
    description.classList.remove("show");
  });
}
