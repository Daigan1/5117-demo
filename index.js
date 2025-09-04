const button = document.querySelector(".cool-button")

button.addEventListener("click", () => {
	button.classList.toggle("goofy")
});


document.querySelector(".name-submit").addEventListener("click", () => {
	const name = (document.querySelector(".name-input")).value;
	console.log(name)
	const newLI = document.createElement("li");
	newLI.innerHTML = name;
	document.querySelector(".list").appendChild(newLI)
});