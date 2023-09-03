const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    body.classList.add(savedTheme);
    if (savedTheme === "dark") {
        themeToggle.checked = true;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    themeToggle.addEventListener("change", function () {
        if (themeToggle.checked) {
            body.classList.add("dark-theme");
            body.classList.remove("light-theme");
            localStorage.setItem("theme", "dark");
        } else {
            body.classList.add("light-theme");
            body.classList.remove("dark-theme");
            localStorage.setItem("theme", "light");
        }
    });
});
