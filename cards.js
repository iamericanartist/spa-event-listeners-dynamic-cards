console.log("cards.js is loaded");

// 1 Create an HTML page that contains a text area and a button labeled Create.
  // nothing needed  
var cards = [];
var textInputEl = document.getElementById("textInput");
var createButtonEl = document.getElementById("createButton");

var outputAreaEl = document.getElementById("outputArea");

// 2 When the user enters in text into the text area and then clicks the create button, 
  // create a new card element in the DOM. You decide the height/width of the card.
createButton.addEventListener("click", function createButtonClick (event){
  makeCard();
  console.log("textInputEl", textInputEl.value);
});
function makeCard() {
  // outputAreaEl.innerHTML += ` You clicked on the ${event.target.innerHTML} section</br>`;
  outputAreaEl.innerHTML += `<div id="domCard[i]" class="domCard">${textInputEl.value}<hr/>
                              <button id="deleteButton[i]" class="buttons">Delete </button></div>`;
}







// 3 When the user clicks the Delete button, the containing card, and no other cards, 
  // should then be removed from the DOM. Not just made invisible, actually removed from the DOM.