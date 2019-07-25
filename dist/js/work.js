const expandableButtons = document.getElementsByClassName("project-group-expand-btn");

for (let i = 0; i < expandableButtons.length; ++i) {
    expandableButtons[i].addEventListener("click", 
    event => {
        expandableButtons[i].classList.toggle("expanded");
        var content = expandableButtons[i].nextElementSibling;
        if (content.classList.contains("show"))
        {
            content.style.maxHeight = "0";
            content.classList.remove("show");
        } else {
            content.style.maxHeight = document.defaultView.getComputedStyle(content, "").getPropertyValue("grid-template-columns").split(" ")[0];
            content.classList.add("show");
        }
    }
    );
}