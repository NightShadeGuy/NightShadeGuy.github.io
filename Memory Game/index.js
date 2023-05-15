const cardArray = [
                  {
                    name: "fire",
                    img: "Images/fire.jpg",
                  },
                  {
                    name: "water",
                    img: "Images/water.jpg",
                  },
                  {
                    name: "earth",
                    img: "Images/earth.jpg",
                  },
                  {
                    name: "air",
                    img: "Images/air.jpg",
                  },
                  {
                    name: "light",
                    img: "Images/light.jpg",
                  },
                  {
                    name: "dark",
                    img: "Images/dark.jpg",
                  },
                  {
                    name: "fire",
                    img: "Images/fire.jpg",
                  },
                  {
                    name: "water",
                    img: "Images/water.jpg",
                  },
                  {
                    name: "earth",
                    img: "Images/earth.jpg",
                  },
                  {
                    name: "air",
                    img: "Images/air.jpg",
                  },
                  {
                    name: "light",
                    img: "Images/light.jpg",
                  },
                  {
                    name: "dark",
                    img: "Images/dark.jpg",
                  }                
];


cardArray.sort(() => 0.5 - Math.random()) //nice shortcut to shuffling an array randomly

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result"); 
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];


function createBoard() {
    for(let i = 0; i < cardArray.length; i++){
       const card = document.createElement("img");
       card.setAttribute("src", "Images/back-cover.jpg");
       card.setAttribute("data-id", i);
       card.setAttribute("class", "image");
       card.addEventListener("click", flipCard);
       gridDisplay.append(card);

       console.log(card);
    }
}

createBoard(); 
 

function checkMatch() {
    const cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];
    //console.log(cards);
    //console.log("check for match");

    if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute("src", "Images/back-cover.jpg");
        cards[optionTwoId].setAttribute("src", "Images/back-cover.jpg");
        //alert("You have clicked the same image!");
    }


    if(cardsChosen[0] === cardsChosen[1]) {
        //alert("You found a match!");
        cards[optionOneId].setAttribute("src", "Images/white.jpg");
        cards[optionTwoId].setAttribute("src", "Images/white.jpg");
        cards[optionOneId].removeEventListener("click", flipCard);
        cards[optionTwoId].removeEventListener("click", flipCard);
        cardsWon.push(cardsChosen);
    }
    else{
        cards[optionOneId].setAttribute("src", "Images/back-cover.jpg");
        cards[optionTwoId].setAttribute("src", "Images/back-cover.jpg");
        //alert("Sorry try again!");
    }
    resultDisplay.textContent = cardsWon.length;
    cardsChosen = [];
    cardsChosenIds = [];

    if(cardsWon.length == (cardArray.length/2)){
        resultDisplay.textContent = "Congratulations you found them all!"; 

        const playButton = document.createElement('button');
        playButton.setAttribute('class', 'play-again');
        playButton.textContent = "Play Again";
        gridDisplay.append(playButton);
      
        playButton.addEventListener('click', () => {
          render();
        })

    }
}

function flipCard() {
  //console.log(cardArray);
  const cardId =  this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);
  //console.log(cardsChosen);
  //console.log(cardsChosenIds);

  this.setAttribute("src", cardArray[cardId].img); 

  if(cardsChosen.length === 2){
    setTimeout(checkMatch, 500);
  }
}

function render() {
   // Reset variables
  cardsChosen = [];
  cardsChosenIds = [];
  cardsWon.length = 0;

  // Clear grid display
  gridDisplay.innerHTML = "";

  // Create a new board
  createBoard();

  // Reset result display
  resultDisplay.textContent = "";
}



