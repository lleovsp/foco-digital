document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".icon").forEach(item => {
        item.addEventListener("mouseover", () => {

            item.children[0].style.color = "#ed5752";
            console.log(item.children[1].children[1].style.width);
        });
        item.addEventListener("mouseleave", () => {
            item.children[0].style.color = "#61a3d4";
            item.children[1].children[1].style.width = "0%";
        });
    });
});