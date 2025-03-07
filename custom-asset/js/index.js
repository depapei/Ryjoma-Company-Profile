fetch("custom-asset/asset/carousel.html")
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

fetch("project-kuliah/yanda/index.html")
.then(response => response.text())
.then(data => {
    document.getElementById("project-yanda-placeholder").innerHTML = data;
});

fetch("project-kuliah/joseph/index.html")
.then(response => response.text())
.then(data => {
    document.getElementById("project-joseph-placeholder").innerHTML = data;
});

fetch("contact/rangga/index.html")
.then(response => response.text())
.then(data => {
    document.getElementById("contact-rangga-placeholder").innerHTML = data;
});

fetch("contact/moris/index.html")
.then(response => response.text())
.then(data => {
    document.getElementById("contact-moris-placeholder").innerHTML = data;
});

fetch("contact/joseph/index.html")
.then(response => response.text())
.then(data => {
    document.getElementById("contact-joseph-placeholder").innerHTML = data;
});

fetch("contact/yanda/index.html")
.then(response => response.text())
.then(data => {
    document.getElementById("contact-yanda-placeholder").innerHTML = data;
});