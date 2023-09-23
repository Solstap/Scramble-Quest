const introButton = document.querySelector(".intro-button");
const introPage = document.querySelector(".intro-page");
const gamePage = document.querySelector(".game-page");
const scrambledLettersContainer = document.getElementById("scrambled-letters");
const wordPlaceholder = document.getElementById("word-placeholder");
const letterButtonsContainer = document.getElementById("letter-buttons");

const levelOne = ["age", "era", "die"];
const levelTwo = ["sail", "monk", "king"];
const levelThree = ["tribe", "slave", "owner"];
const levelFour = ["empire", "viking", "shield"];
const levelFive = ["bravery", "warrior", "pillage"];

let currentLevel = 1;
let currentWordIndex = 0;
let selectedWord = "";


introButton.addEventListener("click", function() {
    introPage.classList.add("hidden"); 
    gamePage.classList.remove("hidden"); 
    document.body.style.backgroundImage = 'url("./files/forest.png")';
});


