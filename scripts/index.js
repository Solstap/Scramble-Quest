const introButton = document.querySelector(".intro-button");
const introPage = document.querySelector(".intro-page");
const gamePage = document.querySelector(".game-page");
const wordInput = document.getElementById("word-input");
const letterButtonsContainer = document.getElementById("letter-buttons-container");

const levelOne = ["age", "era", "die"];
const levelTwo = ["sail", "monk", "king"];
const levelThree = ["tribe", "slave", "owner"];
const levelFour = ["empire", "viking", "shield"];
const levelFive = ["bravery", "warrior", "pillage"];

let currentLevel = levelOne;
let currentWordIndex = 0;
let selectedWord = "";

//SHUFFLE WORD LETTERS/ LINK TO INPUT BOX AND CREATE BUTTONS

function shuffleWord(word) {
    const letters = word.split('');
    for (let i = letters.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [letters[i], letters[j]] = [letters[j], letters[i]];
    }
    return letters.join('');
}

function startGame() {
    selectedWord = currentLevel[Math.floor(Math.random() * currentLevel.length)];
    const shuffledWord = shuffleWord(word);
    wordInput.textContent = "_ ".repeat(word.length);

    for (const letter of shuffledWord) {
        const button = document.createElement("button");
        button.className = "letter";
        button.textContent = letter;
        button.addEventListener("click", () => {
            clickLetter(letter);
        });
        letterButtonsContainer.appendChild(button);
    }
}
// INPUT BOX

function clickLetter(letter) {
    const inputText = wordInput.textContent.split(" ");
    for (let i = 0; i < inputText.length; i++) {
        if (inputText[i] === "_") {
            inputText[i] = letter;
            break;
        }
    }
    wordInput.textContent = inputText.join(" ");

    event.target.classList.add("letter-clicked");
}


// Function to increase the level
function increaseLevel() {
    if (currentLevel === levelOne) {
        currentLevel = levelTwo;
    } else if (currentLevel === levelTwo) {
        currentLevel = levelThree;
    } else if (currentLevel === levelThree) {
        currentLevel = levelFour;
    } else if (currentLevel === levelFour) {
        currentLevel = levelFive;
    } else {
        // CONGRATS MESSAGE HERE
        // & RESET MESSAGE HERE
        // currentLevel = levelOne;
    }

    // Start the game with the new level
    startGame();
}

introButton.addEventListener("click", function() {
    introPage.classList.add("hidden"); 
    gamePage.classList.remove("hidden"); 
    document.body.style.backgroundImage = 'url("./files/forest.png")';
});

startGame();