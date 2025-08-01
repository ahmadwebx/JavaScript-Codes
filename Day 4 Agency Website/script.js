const addClass = document.getElementsByClassName("addClass");
const menu =document.querySelector(".menu");
menu.addEventListener("click", () => {
    if (addClass.style.display === "none") {
        addClass.style.display = "block";
    } else {
        addClass.style.display = "none";
    }
});
    