document.addEventListener("DOMContentLoaded", function () {
    const menuLinks = document.querySelectorAll("ul li a");
    const contentBoxes = document.querySelectorAll(".alap");

    menuLinks.forEach((link, index) => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            // Remove 'active' class from all menu links
            menuLinks.forEach(link => link.removeAttribute("id"));

            // Hide all content boxes
            contentBoxes.forEach(box => box.style.display = "none");

            // Show the selected content box and set active menu link
            if (index === 0) {
                document.getElementById("Arduino").style.display = "block";
                link.setAttribute("id", "active");
            } else if (index === 1) {
                document.getElementById("Igm").style.display = "block";
                link.setAttribute("id", "active");
            } else if (index === 2) {
                document.getElementById("Word").style.display = "block";
                link.setAttribute("id", "active");
            }
        });
    });
});

document.querySelectorAll(".copybutton").forEach(copyButton => {
    copyButton.addEventListener("click", () => {
        const targetElement = document.querySelector(copyButton.dataset.copy);
        const texttoCopy = targetElement.textContent;
        
        navigator.clipboard.writeText(texttoCopy).then(() => {
            alert("Vágólapra másolva!")
        });
        console.log(texttoCopy);
    });
});