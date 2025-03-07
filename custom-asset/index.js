fetch("custom-asset/navbar.html")
.then(response => response.text())
.then(data => {
    document.getElementById("navbar-placeholder").innerHTML = data;
    highlightActiveLink(); // Aktifkan fungsi highlight active link
});

fetch("custom-asset/carousel.html")
.then(response => response.text())
.then(data => {
    document.getElementById("carousel-placeholder").innerHTML = data;
});

fetch("project-kuliah/rangga/index.html")
.then(response => response.text())
.then(data => {
    document.getElementById("project-rangga-placeholder").innerHTML = data;
});

fetch("project-kuliah/moris/index.html")
.then(response => response.text())
.then(data => {
    document.getElementById("project-moris-placeholder").innerHTML = data;
});

function highlightActiveLink() {
    let currentLocation = window.location.pathname.split("/").pop();
    let navLinks = document.querySelectorAll("#navbar-placeholder .nav-link");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentLocation) {
            link.classList.add("active");
        }
    });
}