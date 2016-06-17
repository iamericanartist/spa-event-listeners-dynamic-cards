console.log("cards.js is loaded");

// 1 Create an HTML page that contains a text area and a button labeled Create.
  // nothing needed in .js file...
var cards = [];
var textInputEl = document.getElementById("textInput");
var createButtonEl = document.getElementById("createButton");
var outputAreaEl = document.getElementById("outputArea");
var counter = 0;

// 2 When the user enters in text into the text area and then clicks the create button, 
  // create a new card element in the DOM. You decide the height/width of the card.
createButton.addEventListener("click", function createButtonClick (event){
  makeCard();
  console.log("textInputEl", textInputEl.value);
  console.log(">User CLICKED");
});

function makeCard() {
    // Initialize all variables scoped to function
    var divEl = document.createElement("div"),
        lineEl = document.createElement("hr"),
        delButtonEl = document.createElement("button"),
        buttonText = document.createTextNode("Delete This Card!"),
        userInput = document.createTextNode(textInputEl.value); //end variable adding (, and ; help DRY up code)

        divEl.id = `domCard-${counter}`; // Setting "domCard-#" ids for each new CARD
        divEl.appendChild(userInput); //adding the userInput value to the CARD
        divEl.appendChild(lineEl); //adding the "hr" element to the CARD
        divEl.appendChild(delButtonEl); //adding the delete button to the CARD
        divEl.classList.add("domCard"); //gives the CARDS a class of "domCard" for styling

        delButtonEl.appendChild(buttonText); //gives the DELETE BUTTON it's text from above
        delButtonEl.id = `delDomCard-${counter}`; //gives each DELETE BUTTON a numbered ID
        delButtonEl.classList.add("domCardDeleteButton"); //gives DELETE BUTTONS a class of "domCardDeleteButton" for styling

        outputAreaEl.appendChild(divEl); //writes the CARD to the outputArea
        counter++; // Our counter within the function, for assigning unique IDs to each card/delete button --- AT BOTTOM SO starts at 0  (if at top would auto increment 1)
}

// 3 When the user clicks the Delete button, the containing card, and no other cards, 
  // should then be removed from the DOM. Not just made invisible, actually removed from the DOM.
document.querySelector("body").addEventListener("click", function(event) {
  // console.log(event);
  var deleteCard = event.target.classList.contains("domCardDeleteButton"); 
  if (deleteCard){
    event.path[2].removeChild(event.target.parentNode); //uses PATH to DOM traverse to the right place, deleting the parent of the delete button
    // event.target.parentNode.parentNode.removeChild(event.target.parentNode); //alternate method for above line
    console.log("deleteCard", event.target.parentNode);
  }
});

//CHECK FOR ENTER KEY USE rather than click
function ifEnterKey () {
  if (event.which === 13) {
    console.log("textInputEl", textInputEl.value);
    console.log(">User Hit ENTER");
    makeCard();
  }
}

textInputEl.addEventListener("keyup", ifEnterKey);

////////////////////////// String Interpolation method: /////////////////////////////
// // Part 2:
// function makeCard() {
//   outputAreaEl.innerHTML += ` You clicked on the ${event.target.innerHTML} section</br>`;

//   outputAreaEl.innerHTML += `<div id="domCard[i]" class="domCard">${textInputEl.value}<hr/>
//                               <button id="deleteButton[i]" class="buttons">Delete </button></div>`;
// }
