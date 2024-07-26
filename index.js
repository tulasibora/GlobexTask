let sec = document.querySelectorAll("section");
let links = document.querySelectorAll("nav ul li a");
console.log(links);
window.onscroll = () => {
  sec.forEach((section) => {
    let top = window.scrollY;
    let offset = section.offsetTop - 60;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");
    if (top >= offset && top < offset + height) {
      links.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("nav ul li a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};
