document.addEventListener("DOMContentLoaded", () => {
	document.querySelectorAll(".icon").forEach((item) => {
		item.addEventListener("mouseover", () => {
			item.children[0].style.color = "#ed5752";
			item.children[1].children[1].style.width = "100%";
		});
		item.addEventListener("mouseleave", () => {
			item.children[0].style.color = "#61a3d4";
			item.children[1].children[1].style.width = "0%";
		});
	});
	const toDoItems = document.querySelectorAll(".to-do-item");
	toDoItems.forEach((item) => {
		item.addEventListener("click", () => {
			console.log("GIRO");
			item.children[0].lastChild.style.transform = "rotateX(90deg)";
		});
	});
});


