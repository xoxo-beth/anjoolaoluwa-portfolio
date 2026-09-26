const themeButton = document.getElementById("theme-toggle");
const body = document.body
themeButton.addEventListener("click", function () {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        themeButton.textContent = "Light Mode";
    } else {
        themeButton.textContent = "Dark Mode";
    }
});