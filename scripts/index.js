const gameContainer = document.querySelector(".game-container");
const introButton = document.querySelector(".intro-button");
const introPage = document.querySelector(".intro-page");
const gamePage = document.querySelector(".game-page");
const wordInput = document.getElementById("word-input");
const letterButtonsContainer = document.getElementById("letter-buttons-container");
const submitButton = document.getElementById("submit-button")
const resetButton = document.getElementById("reset-button")
const lifeContainer = document.getElementById("life")
const levelContainer = document.getElementById("level")
let lives = 3
const gameOverContainer = document.getElementById("game-over")
const gameCompleteContainer = document.getElementById("game-complete")
const restartButton = document.getElementById("start-again-button")
const playAgainButton = document.getElementById("play-again-button")
const lifeIconsContainer = document.getElementById("life-icons")
const levelIconsContainer = document.getElementById("level-icons")

const levelOne = [
    'elf',
    'axe',
    'orb',
    'fay',
    'pod',
    'gem',
    'hex',
    'pit',
    'run',
    'oak'
  ];
const levelTwo = [
    'mage',
    'bard',
    'scroll',
    'rune',
    'wand',
    'helm',
    'myth',
    'gaze',
    'cape',
    'dusk'
  ];
const levelThree = [
    'beast',
    'crown',
    'magic',
    'sword',
    'faery',
    'flame',
    'quest',
    'shield',
    'stone',
    'earth'
  ];
const levelFour = [
    'dragon',
    'wizard',
    'castle',
    'forest',
    'spirit',
    'grail',
    'angel',
    'grove',
    'golem',
    'scroll'
  ];
  
const levelFive =[
    'phoenix',
    'sorcery',
    'unicorn',
    'crystal',
    'griffin',
    'potion',
    'lantern',
    'ritual',
    'temple',
    'hammer'
  ];

let currentLevel = levelOne;
let currentWordIndex = 0;
let selectedWord = "";
const levelArray = [levelOne,levelTwo,levelThree,levelFour,levelFive]

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
    createLevelIcons()
    selectedWord = currentLevel[Math.floor(Math.random() * currentLevel.length)];
    const shuffledWord = shuffleWord(selectedWord);
    wordInput.textContent = "_ ".repeat(selectedWord.length);

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
//function to remove buttons
function removeButtons(){
    const button = document.querySelectorAll('.letter')
    const buttonArray = Array.from(button)
    for (const buttons of buttonArray){
        buttons.remove()
    }
}
//function to remove clicked class and color from button
function removeColor(){
    const button = document.querySelectorAll('.letter')
    const buttonArray = Array.from(button)
    for (const buttons of buttonArray){
        buttons.classList.remove("letter-clicked")
    }
}
//create icons
function createLevelIcons(){
    const levelIcon = document.createElement("img");
    levelIcon.src = "./files/sword.png"
    levelIcon.classList.add("level-icon")
    levelIconsContainer.append(levelIcon)
}
//remove icons 
function removeLevelIcons(){
    const levelIcon = document.querySelectorAll('.level-icon')
    const levelIconArray = Array.from(levelIcon)
    for (const icon of levelIconArray){
        icon.remove();
    }
}
//function to remove life
function loseLife(){

 if (lives >= 0){
    lives-- 
    lifeContainer.textContent = lives
 }
}
// ENDGAME FUNCTIONS

function gameOver(){
    gameOverContainer.classList.remove("hidden")
}
function gameRestart(){
    gameOverContainer.classList.add("hidden")
    currentLevel = levelOne
    lives = 3
    lifeContainer.textContent = lives
    levelContainer.textContent = "Level One"
    
    removeButtons()
    startGame()
}
//Restart game function

restartButton.addEventListener("click",function(){
    gameRestart() 
})

//function to check input versus word and increase level

function inputCheck(){
    const joinedSubmittedWord = wordInput.textContent.split(" ").join("")
    
    if (joinedSubmittedWord === selectedWord){
        removeButtons()
        increaseLevel()
    } else if(lives > 0){
        loseLife()
        resetInput()
    } else{
        //game over function
        gameOver()
    }

}
submitButton.addEventListener("click", function(){
    inputCheck()
})
//LIFE COUNTER


//RESET BUTTON 
function resetInput(){
    wordInput.textContent = "_ ".repeat(selectedWord.length);
    removeColor()
}
resetButton.addEventListener("click", function(){
    resetInput()
})
// Function to increase the level
function increaseLevel() {
    if (currentLevel === levelOne) {
        currentLevel = levelTwo;
        levelContainer.textContent = "Level Two"
    } else if (currentLevel === levelTwo) {
        currentLevel = levelThree;
        levelContainer.textContent = "Level Three"
    } else if (currentLevel === levelThree) {
        currentLevel = levelFour;
        levelContainer.textContent = "Level Four"
    } else if (currentLevel === levelFour) {
        currentLevel = levelFive;
        levelContainer.textContent = "Level Five"
    } else {
        // CONGRATS MESSAGE HERE
        // & RESET MESSAGE HERE
        removeLevelIcons()
        
        currentLevel = levelOne;
        levelContainer.textContent = "Level One"
    }

    // Start the game with the new level
    startGame();
}

introButton.addEventListener("click", function() {
    introPage.classList.add("hidden"); 
    gamePage.classList.remove("hidden"); 
    document.body.style.backgroundImage = 'url("./files/forest.jpg")';
    gameContainer.style.display = 'block';
    gameContainer.style.backgroundSize = 'none';
});
startGame();