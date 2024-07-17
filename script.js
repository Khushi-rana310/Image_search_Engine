//ysBFqtt4tjx8fT6Do-n65IQlrdad8td6yt4oOlslWvQ
//secret key- bvk-O2UGoaudFz_JeQ1sX4H8OPLi-5ADQlsbH9XIU7I
//633419

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");


const accessKey = "ysBFqtt4tjx8fT6Do-n65IQlrdad8td6yt4oOlslWvQ";

let keyword = "";
let page = 1;

async function searchImages() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    if(page===1){
        searchResult.innerHTML="";
    }

    const results = data.results;
    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;

        const imageLink = document.createElement("a");   // to open on browser
        imageLink.href = result.links.html;
        imageLink.target = "_blank";                    // open in new tab

        imageLink.appendChild(image);              //to place img in "a" tag
        searchResult.appendChild(imageLink);
    })
    showMoreBtn.style.display = "block";

}
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
})

showMoreBtn.addEventListener("click",()=>{
    page++;
    searchImages();
})








