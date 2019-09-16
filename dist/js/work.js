let Categories = [];

// Parent element for all groups of project, i.e. 'C#' 'Delphi' 'C++' etc (categories)
let ProjectsGroupDiv = document.getElementById("project-group");

AddProject(
  "Delphi",

  "Screen Cropper",

  "videos/projects/Delphi/ScreenCropper.mp4",

  "A screenshot taking program I made for myself a while back with Delhpi for Windows.",

  "https://github.com/meJevin/Screen-Cropper",

  ["Delphi", "Lazarus", "WinForms", "WinAPI", "Windows"]
);

AddProject(
  "Delphi",

  "Key Logger",

  "videos/projects/Delphi/KeyLogger.mp4",

  "My attempt on creating a key logger. Every programmer has to make one of these, come on...",

  "https://github.com/meJevin/Simple-Key-Logger",

  [
    "Delphi",
    "Lazarus",
    "WinForms",
    "WinAPI",
    "Windows",
    "WinSocks",
    "Indy10",
    "Client-Server"
  ]
);

AddProject(
  "Delphi",

  "PV Input",

  "videos/projects/Delphi/PVInput.mp4",

  "Application that monitors user keyboard input with ceratin keys. <br /> <br />I made it for my friends and myself to record their input history while in-game",

  "https://github.com/meJevin/PVInput",

  ["Delphi", "Lazarus", "WinForms", "WinAPI", "Windows"]
);

AddProject(
  "C#",

  "Lounge Radio",

  "videos/projects/C#/LoungeRadio.mp4",

  "An application I made for a friend to host his own radio station via HTTP.<br/><br/>Works on iOS and Anroid via Xamarin.Forms",

  "https://github.com/meJevin/LRadio",

  ["C#", "Mobile", "iOS", "Anroid", "Xamarin.Forms", "Cross-Platform"]
);

AddProject(
  "C#",

  "Philter",

  "videos/projects/C#/Philter.mp4",

  "This is an application made for a friend to help promote his own business related to cannabis.<br/><br/>It was made with Unity3D for iOS and Anroid and has a really complex and buitiful UI and uses RESTful API",

  "https://github.com/meJevin/Philter",

  [
    "C#",
    "Unity3D",
    "Cross-Platform",
    "REST",
    "iOS",
    "Android",
    "JSON",
    "Mobile"
  ]
);

AddProject(
  "C#",

  "Screen Cropper",

  "videos/projects/C#/ScreenCropper.mp4",

  "A port of my screenshor taking program originally written in Delphi for C#",

  "https://github.com/meJevin/ScreenCropperCSharp",

  ["C#", "WinForms", "WinAPI", "Windows"]
);

AddProject(
  "Web",

  "My website",

  "videos/projects/Web/MyWebsite.mp4",

  "Yeah, this is my website!<br/><br/>It's using SASS as it's CSS preprocessor via node-sass",

  "https://github.com/meJevin/meJevin.github.io",

  ["Web", "HTML5", "CSS3", "SASS", "JavaScript"]
);

AddProject(
  "Dart",

  "PV Weather",

  "videos/projects/Dart/PVWeather.mp4",

  "A simple and clean cross-platform Weather app built using Flutter, OpenWeatherAPI and Firebase",

  "https://github.com/meJevin/PVWeather",

  ["Dart", "Flutter", "REST", "Firebase", "NoSQL", "Reactive", "iOS", "Android"]
);


const expandableButtons = document.getElementsByClassName(
  "project-group-expand-btn"
);

window.addEventListener("resize", OnResize);

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
  videoPath,
  description,
  projectLink,
  tags
) {
  let projectGroupElement = document.getElementsByClassName("project-group")[0];

  let category = GetCategory(categoryName);

  if (category == null) {
    category = AddCategory(categoryName);
    projectGroupElement.appendChild(category);
  }

  let categoryContent = category.getElementsByClassName(
    "project-group-content"
  )[0];

  let itemElement = document.createElement("div");
  itemElement.className = "item";

  let itemVideoDiv = document.createElement("div");
  itemVideoDiv.className = "item-video-container";

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

  itemElement.appendChild(AGitLinkElement);

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



let videoPreviews = document.getElementsByClassName("item-video-container");

for (let i = 0; i < videoPreviews.length; ++i) {
  videoPreviews[i].addEventListener("mouseenter", event => {
    // Get the video overlay and expand it
    let videoElement = videoPreviews[i].children[0];
    videoElement.classList.add("show");
  });

  videoPreviews[i].addEventListener("mouseleave", event => {
    // Make the overlay small again
    let videoElement = videoPreviews[i].children[0];
    videoElement.classList.remove("show");
  });
}
