const toggle = document.querySelector(".toggle-bar");
const links = document.querySelector(".nav-links");

const handleClick = (e) => {
    console.log(e.target);

    links.classList.toggle("show-links");
};
toggle.addEventListener("click", handleClick);
console.log(toggle);