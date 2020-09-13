const openMenu = document.getElementById("hamburger-menu");

openMenu.addEventListener("change", () => {
	if (openMenu.checked) {
		console.log("checked");
	} else {
		console.log("unchecked");
	}
});
