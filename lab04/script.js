function toggleMenu() {
    const nav = document.getElementById("navlinks");
    nav.classList.toggle("show");
}

function showPage(pageId) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");

    document.getElementById("navlinks").classList.remove("show");
}

document.addEventListener("DOMContentLoaded", () => {
    showPage("home");
});
