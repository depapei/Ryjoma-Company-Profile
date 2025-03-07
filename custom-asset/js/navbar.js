fetch("custom-asset/asset/navbar.html")
.then(response => response.text())
.then(data => {
    document.getElementById("navbar-placeholder").innerHTML = data;
    highlightActiveLink(); // Aktifkan fungsi highlight active link
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