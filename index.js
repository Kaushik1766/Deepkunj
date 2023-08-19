// var currentTheme = "light";
// localStorage.getItem("theme",light);
themeToggler(localStorage.getItem("theme"));
var light = document.getElementById("light");
var dark = document.getElementById("dark");
light.addEventListener("click", () => {
    localStorage.setItem("theme", "light");
    themeToggler(localStorage.getItem("theme"));

});
dark.addEventListener("click", () => {
    localStorage.setItem("theme", "dark");
    themeToggler(localStorage.getItem("theme"));

});

function themeToggler(theme) {
    document.querySelector("body").setAttribute("data-bs-theme", theme);
    // localStorage.setItem("theme", theme);
    if (theme == "dark") {
        document.getElementById("durgaFace").style.filter = "invert(90%)";
        document.querySelectorAll(".emb").forEach((item) => {
            item.style.filter = "invert(90%)";
        });
    }
    else {
        document.getElementById("durgaFace").style.filter = "none";
        document.querySelectorAll(".emb").forEach((item) => {
            item.style.filter = "none";
        });
    }
}