
// Search Function 

function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('searchInput');
    searchBar = document.getElementById('searchBar');
    searchButton = document.getElementById('searchButton');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
    inputButton = document.getElementById("inputButton")
    
    inputButton.style.cssText="border-bottom-left-radius:0px; border-bottom-right-radius:0px";
    ul.style.display="block";
    
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
            li[i].style.cssText = "border-bottom-left-radius:255px; border-bottom-right-radius:255px";
        } else {
            li[i].style.display = "none";
        }
    }
    
    // Add event listener to hide search bar when clicking outside of it
    document.addEventListener("click", function(event) {
        if (event.target.closest("#searchBar") === null) {
            ul.style.display = "none";
            inputButton.style.cssText="border-bottom-left-radius:60px; border-bottom-right-radius:60px";
        }
    });
}



// Filter Function

const buttonItem = document.querySelectorAll('#buttons li');
const cardItem = document.querySelectorAll('.tech-section container');

buttonItem.forEach(li => {
    li.onclick = function() {
        //active
        buttonItem.forEach(li => {
            li.className = "";
        })
        li.className = "active";
        // Filter
        console.log(li.textContent);
        const value = li.textContent;
        cardItem.forEach(container => {
            // console.log(div.getAttribute('data-filter'));
            if(container.getAttribute('data-filter') == value || value == "All") {
                // console.log("display it!!")
                container.style.cssText = "";
            } else {
                // console.log("Do not display it!!")
                container.style.display = 'none';
            }
        });
    };
});

// Favorite Funciton

const heartIcons = document.querySelectorAll('.favorites-container .fa-heart-o');

heartIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        icon.classList.toggle('fa-heart-o');
        icon.classList.toggle('fa-heart');
    });
});
