// VARIABLES
const form = document.querySelector("form");
const input = document.getElementById("search-term");
const contentDiv = document.querySelector("#gifs");
const removeButton = document.querySelector(".remove-images");
const gifContent = document.querySelector(".gif-content");

// FUNCTIONS
async function getGif() {
	const res = await axios.get("https://api.giphy.com/v1/gifs/search", {
		params: {
			q: input.value,
			api_key: "5non8GluZuMy5LqN1KU35FRbFeVoTWtS",
		},
	});
	//clears input
	input.value = "";
	// Calls render gif
	renderGif(res.data);
}

// renders the gif
function renderGif(response) {
	// gets the length of the returned data
	let numIndex = response.data.length;
	if (numIndex) {
		// creates a random index from the length of the returned data
		let randomIndex = Math.floor(Math.random() * numIndex);
		// creates an empty image tag
		const image = document.createElement("img");
		const div = document.createElement("div");

		// sets the source of the image tag to the image of the data
		image.src = response.data[randomIndex].images.original.url;
		div.append(image);
		gifContent.append(div);
	}
}

// Adding Event listeners
form.addEventListener("submit", function (e) {
	e.preventDefault();
	getGif();
});

removeButton.addEventListener("click", function () {
	gifContent.remove();
});
