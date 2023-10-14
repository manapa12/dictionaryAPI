let lupa = document.getElementById("search-button");
let searchBar = document.getElementById("word-search");
let mySwitch = document.getElementById("flexSwitchCheckChecked")
const myContent = document.getElementById("main-content-container");
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";


let mainWord = document.getElementById("main-word");
let pronunce = document.getElementById("pronunce");
let typeOfWord = document.getElementById("type-of-word");
let listOfMeanings = document.getElementById("meanings-list");
let synonym = document.getElementById("synonym-place");

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

/**This function registers when the user presses enter */

searchBar.addEventListener("keydown", function(event){
    if(event.key ==="Enter"){
        removeAllChildElements()
        getData(searchBar.value);
    }
})


/**This function retrives the data from the API  */
async function getData(word){
    try{
    let response = await fetch(url + word);
    if(response.ok){
        let wordInfo = await response.json();
        console.log(wordInfo)
        mainWord.innerHTML = wordInfo["0"].word;
        pronunce.innerHTML = wordInfo["0"].phonetic;
        typeOfWord.innerHTML = wordInfo["0"].meanings["0"].partOfSpeech;
        let firstPartOfSpeech = wordInfo[0].meanings[0].definitions[0].definition;
        let lengthOfString =wordInfo[0].meanings[0].definitions.length;
        for(let i = 0; i < lengthOfString; i++){
            let child = document.createElement("li");
            child.textContent = wordInfo[0].meanings[0].definitions[i].definition;
            listOfMeanings.appendChild(child)
        }
        let synonyms = wordInfo[0].meanings[0].synonyms;
        let listOfSynonyms = "";
        if(wordInfo[0].meanings[0].synonyms.length === 0){
            synonym.innerHTML = "Sorry, no synonyms found"
        }else{
        synonyms.forEach(function(element){
            listOfSynonyms = listOfSynonyms + element + ",  ";
          synonym.innerHTML = listOfSynonyms;
        })
        }
    }else{
        throw new Error("No Connection")
    }
    }catch(Error){
        console.log("Error: " + Error);
    }
}

//*This removes the childs of the meaning*//
function removeAllChildElements() {
    listOfMeanings.innerHTML = ""
}



const randomWords = [
    'apple',
    'banana',
    'chocolate',
    'dog',
    'elephant',
    'flower',
    'guitar',
    'happiness',
    'island',
    'jazz',
    'kangaroo',
    'lemon',
    'mountain',
    'noodle',
    'ocean',
    'penguin',
    'queen',
    'rainbow',
    'sunny',
    'tiger',
    'umbrella',
    'volcano',
    'waterfall',
    'xylophone',
    'zebra'
  ];


  