const toggleValue = document.querySelectorAll('input[name="toggle"]');

for (let i = 0; i < toggleValue.length; i++) {
	toggleValue[i].addEventListener("change", (event) => {
		console.log(toggleValue[i].value);
	});
}
