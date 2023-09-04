const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

function saveTheme(theme) {
    localStorage.setItem("theme", theme);
}

function setTheme(theme) {
    if (theme === "dark") {
        body.classList.remove("light-theme");
        body.classList.add("dark-theme");
        themeToggle.checked = true;
    } else {
        body.classList.remove("dark-theme");
        body.classList.add("light-theme");
        themeToggle.checked = false;
    }
}

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    setTheme(savedTheme);
}

themeToggle.addEventListener("change", function () {
    if (themeToggle.checked) {
        setTheme("dark");
        saveTheme("dark");
    } else {
        setTheme("light");
        saveTheme("light");
    }
});
