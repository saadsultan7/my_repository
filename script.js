const accesskey = "xVGJ6aIyaWhcSPCXtsLt7EQo1B3C7Xpq1tyizsv4NVI";

const formEl = document.querySelector("form");
const inputEl = document.getElementById("search-input");
const searchResults = document.querySelector(".search-results");
const showMore = document.getElementById("show-more-button");

let inputdata = "";
let page = 1;

async function searchImages() {
    inputdata = inputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}&client_id=${accesskey}`;

    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;
    if (page === 1) {
        searchResults.innerHTML = "";
    }
    results.map((result) => {
            const imageWrapper = document.createElement("div");
            imageWrapper.classList.add("search-result");
            const image = document.createElement("img");
            // console.log(imageWrapper.classList);
            // console.log(imageWrapper.classList);
            // console.log(imageWrapper.classList);
            // console.log(imageWrapper.classList);
            // console.log(imageWrapper.classList);
            // console.log(imageWrapper.classList);
            // console.log(imageWrapper.classList);
            // console.log(imageWrapper.classList);
            image.src = result.urls.small;
            image.alt = result.alt_description;
            const imageLink = document.createElement("a");
            imageLink.href = result.links.html;
            imageLink.target = "_blank";
            imageLink.textContent = result.alt_description;

            imageWrapper.appendChild(image);
            imageWrapper.appendChild(imageLink);
            searchResults.appendChild(imageWrapper); 
        });
        
        page++;
        if (page > 1) {
            showMore.style.display = "block";
        }
}

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    page = 1;
    searchImages();
});

showMore.addEventListener("click", () => {
    searchImages();
});