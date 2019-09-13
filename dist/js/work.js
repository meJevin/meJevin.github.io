let Categories = [];

// Parent element for all groups of project, i.e. 'C#' 'Delphi' 'C++' etc (categories)
let ProjectsGroupDiv = document.getElementById("project-group");

AddProject(
  "Delphi",
  "Test Name",
  ["Delphi", "Nigga", "Fuck", "Whatever"],
  "https://github.com/meJevin/meJevin.github.io",
  "This is a nigga that just likes to fuck my ass",
  "img/projects/delphi/ScreenCropper.mp4"
);
AddProject(
  "Delphi",
  "Test Name",
  ["Delphi", "Nigga", "Fuck", "Whatever"],
  "https://github.com/meJevin/meJevin.github.io",
  "This is a nigga that just likes to fuck my ass",
  "img/projects/delphi/ScreenCropper.mp4"
);

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
      let finalContentHeight = 0;

      for (let j = 0; j < rowValues.length; ++j) {
        finalContentHeight += parseInt(rowValues[j].replace("px", ""));
      }

      content.style.maxHeight = finalContentHeight + "px";
      content.classList.add("show");
    }
  });
}

function OnResize() {
  for (let i = 0; i < expandableButtons.length; ++i) {
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

const projectVideoPreviews = document.getElementsByClassName(
  "item-video-preview"
);

for (let i = 0; i < projectVideoPreviews.length; ++i) {
  projectVideoPreviews[i].addEventListener("mouseenter", event => {
    projectVideoPreviews[i].play();
  });

  projectVideoPreviews[i].addEventListener("mouseleave", event => {
    projectVideoPreviews[i].pause();
    projectVideoPreviews[i].currentTime = 0;
  });
}

function GetCategory(categoryName) {
  for (let i = 0; i < Categories.length; ++i) {
    if (
      categoryName ==
      Categories[i].getElementsByClassName("project-group-expand-btn")[0]
        .children[0].innerText
    ) {
      return Categories[i];
    }
  }

  return null;
}

function AddProject(
  categoryName,
  projectName,
  tags,
  projectLink,
  description,
  videoPath
) {
  let projectGroupElement = document.getElementsByClassName("project-group")[0];

  let category = GetCategory(categoryName);

  if (category == null) {
    category = AddCategory(categoryName);
    projectGroupElement.appendChild(category);
  }
  console.log(category);

  let categoryContent = category.getElementsByClassName(
    "project-group-content"
  )[0];

  let itemElement = document.createElement("div");
  itemElement.className = "item";

  let itemVideoDiv = document.createElement("div");

  let videoElement = document.createElement("video");
  videoElement.className = "item-video-preview";
  videoElement.toggleAttribute("loop");
  videoElement.toggleAttribute("muted");

  let videoSourceElement = document.createElement("source");
  videoSourceElement.setAttribute("src", videoPath);
  videoSourceElement.setAttribute("type", "video/mp4");

  videoElement.appendChild(videoSourceElement);

  itemVideoDiv.appendChild(videoElement);

  itemElement.appendChild(itemVideoDiv);

  let itemDescriptionDiv = document.createElement("div");
  itemDescriptionDiv.classList = "item-description";

  let itemDescriptionHeaderElement = document.createElement("h3");
  itemDescriptionHeaderElement.innerHTML = description;

  itemDescriptionDiv.appendChild(itemDescriptionHeaderElement);

  itemElement.appendChild(itemDescriptionDiv);

  let infoIconElement = document.createElement("div");
  infoIconElement.className = "info-icon";

  let infoIconIElement = document.createElement("i");
  infoIconIElement.className = "fas fa-info";

  infoIconElement.appendChild(infoIconIElement);

  itemElement.appendChild(infoIconElement);

  let AGitLinkElement = document.createElement("a");
  AGitLinkElement.setAttribute("href", projectLink);
  AGitLinkElement.setAttribute("target", "_blank");
  AGitLinkElement.className = "btn-dark";

  let AGitLinkIconElement = document.createElement("i");
  AGitLinkIconElement.className = "fab fa-github";
  AGitLinkIconElement.innerHTML = " " + projectName;

  AGitLinkElement.appendChild(AGitLinkIconElement);

  let tagContainerDivElement = document.createElement("div");
  tagContainerDivElement.className = "tag-container";

  let tagDivElements = [];
  for (let i = 0; i < tags.length; ++i) {
    let itemTagDivElement = document.createElement("div");
    itemTagDivElement.className = "item-tag";

    let itemHeaderElement = document.createElement("h3");
    itemHeaderElement.innerHTML = tags[i];

    itemTagDivElement.appendChild(itemHeaderElement);
    tagContainerDivElement.appendChild(itemTagDivElement);
  }

  itemElement.appendChild(tagContainerDivElement);

  categoryContent.appendChild(itemElement);
}

function AddCategory(categoryName) {
  let categoryHtmlElement = document.createElement("div");

  let projectButton = document.createElement("button");
  projectButton.className = "project-group-expand-btn";
  projectButton.appendChild(document.createElement("h3"));
  projectButton.children[0].innerHTML = categoryName;

  categoryHtmlElement.appendChild(projectButton);

  let projectGroupContent = document.createElement("div");
  projectGroupContent.className = "project-group-content";

  categoryHtmlElement.appendChild(projectGroupContent);

  Categories.push(categoryHtmlElement);

  return Categories[Categories.length - 1];
}
