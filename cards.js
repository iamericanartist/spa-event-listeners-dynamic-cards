console.log("cards.js is loaded");

// 1 Create an HTML page that contains a text area and a button labeled Create.
  // nothing needed  
var cards = [];
var textInputEl = document.getElementById("textInput");
var createButtonEl = document.getElementById("createButton");
var outputAreaEl = document.getElementById("outputArea");
var counter = 0;

//CHECK FOR ENTER KEY USE rather than click
function ifEnterKey () {
  if (event.which === 13) {
    console.log(">User Hit ENTER");
    makeCard();
  }
}

// 2 When the user enters in text into the text area and then clicks the create button, 
  // create a new card element in the DOM. You decide the height/width of the card.
createButton.addEventListener("click", function createButtonClick (event){
  makeCard();
  console.log("textInputEl", textInputEl.value);
});

function makeCard() {
        // // initialize all variables scoped to function
    var divEl = document.createElement("div"),
        lineEl = document.createElement("hr"),
        delButtonEl = document.createElement("button"),
        buttonText = document.createTextNode("Delete This Card!"),
        userInput = document.createTextNode(textInputEl.value); //end variable adding (, and ; help DRY up code)

        counter++; // Our counter within the function, for assigning unique IDs to each card/delete button
        divEl.id = `domCard-${counter}`; // Setting "domCard-#" ids for each new CARD
        divEl.appendChild(userInput); //adding the userInput value to the CARD
        divEl.appendChild(lineEl); //adding the "hr" element to the CARD
        divEl.appendChild(delButtonEl); //adding the delete button to the CARD
        divEl.classList.add("domCard"); //gives the CARDS a class of "domCard" for styling
        // console.log("Log", divEl.classList)
        // console.log("Log", divEl.classList.value)
        delButtonEl.appendChild(buttonText); //gives the DELETE BUTTON it's text from above
        delButtonEl.id = `delDomCard-${counter}`; //gives each DELETE BUTTON a numbered ID
        delButtonEl.classList.add("domCardDeleteButton"); //gives DELETE BUTTONS a class of "domCardDeleteButton" for styling
        // console.log("delButtonEl Values", delButtonEl.classList)
        // console.log("delButtonEl Values", delButtonEl.classList.value)
        outputAreaEl.appendChild(divEl);
}

// 3 When the user clicks the Delete button, the containing card, and no other cards, 
  // should then be removed from the DOM. Not just made invisible, actually removed from the DOM.





textInputEl.addEventListener("keyup", ifEnterKey);






// // Part 2:
// // String Interpolation method:
// function makeCard() {
//   outputAreaEl.innerHTML += ` You clicked on the ${event.target.innerHTML} section</br>`;

//   outputAreaEl.innerHTML += `<div id="domCard[i]" class="domCard">${textInputEl.value}<hr/>
//                               <button id="deleteButton[i]" class="buttons">Delete </button></div>`;
// }
