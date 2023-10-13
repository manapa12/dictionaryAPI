let lupa = document.getElementById("search-button");
let searchBar = document.getElementById("word-search");
let mySwitch = document.getElementById("flexSwitchCheckChecked")
const myContent = document.getElementById("main-content-container");



/**This function makes the search bar appear */
lupa.addEventListener("click", ()=> {
    if(searchBar.style.display === "none"){
        searchBar.style.display = "inline-block";
      searchBar.style.padding = "0"
        searchBar.style.width = "auto";
        searchBar.style.margin = "0";
        lupa.style.display = "none";
    }else{
        searchBar.style.display = "none" 
    }
});

/**This function makes the search bar dissappear */
myContent.addEventListener("click",function(){
    if(searchBar.style.display === "inline-block" & lupa.style.display === "none" ){
        searchBar.style.display = "none";
        lupa.style.display = "inline-block";
    }
})

/**This function makes the night mode active */
mySwitch.addEventListener("click", function(){
    if(mySwitch.checked){
        document.body.style.backgroundColor = "#243447";
        document.body.style.color = "white";
    } else {
        document.body.style.backgroundColor = 'white'; 
        document.body.style.color = "black";
    }
})