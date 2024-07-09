var searchContainer = document.getElementById("search-container");
var searchInput = document.getElementById("search-input");
searchContainer.addEventListener("click", function () {
    searchContainer.classList.remove("search-container");
    searchContainer.classList.add("expanded-search-logout");
});
document.addEventListener("click", function (event) {
    if (event.target != searchContainer && event.target != searchInput) {
        searchContainer.classList.remove("expanded-search-logout");
        searchContainer.classList.add("search-container");
    }
});