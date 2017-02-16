// Tic Tac Toe
// 	Board
// 		9 Boxes
// 		check ifWin function inside of here
// 			loop over the boxes and check if there is a winner.
// 		createBoxes
// 			this function would use the box constructor to create a box and push the box into the boxes property of the board and stop after 9 boxes are pushed in.
// 	Box
// 		it can be either x, or or nothing
// 		if clicked on it will be whatever the player is 
// 			unless if it was already clicked on
// 		horizantal
// 		vertical
// Hangman
	// Word
	// 	a random word from a list
	// 	split the word into an object
	// 	add loop over a function that will run a display on each letter object
	// loop over the word and create letter objects and push those letter objects into the letters property
	// Letter
	// 	25 letters
	// 	incorrect or correct according to if they are in the array
	// 	function if incorrect

	// 	function if correct
var inquirer = require("inquirer");
var Word = require("./word.js");
var words = ["Ahri", "Akali", "Alistar", "Amumu", "Anivia", "Annie", "Ashe", "Blitzcrank", "Brand", "Caitlyn", "Cassiopeia", "Cho'gath", "Corki", "Dr. Mundo", "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gangplank", "Garen", "Gragas", "Graves", "Hecarim", "Heimerdinger", "Irelia", "Janna", "Jarvan IV", "Jax", "Karma", "Karthus", "Kassadin", "Katarina", "Kayle", "Kennen", "Kog'Maw", "LeBlanc", "Lee Sin", "Leona", "Lulu", "Lux", "Malphite", "Malzahar", "Maokai", "Master Yi", "Miss Fortune", "Mordekaiser", "Morgana", "Nasus", "Nautilus", "Nidalee", "Nocturne", "Nunu", "Olaf", "Orianna", "Pantheon", "Poppy", "Rammus", "Renekton", "Riven", "Rumble", "Ryze", "Sejuani", "Shaco", "Shen", "Shyvana", "Singed", "Sion", "Sivir", "Skarner", "Sona", "Soraka", "Swain", "Talon", "Taric", "Teemo", "Tristana", "Trundle", "Trydamere", "Twisted Fate", "Twitch", "Udyr", "Urgot", "Varus", "Vayne", "Veigar", "Viktor", "Vladimir", "Volibear", "Warwick", "Wukong", "Xerath", "Xin Zhao", "Yorick", "Ziggs", "Zilean"];
var currentWord = words[Math.floor(Math.random()*words.length)];
var wordObject = new Word(currentWord);
wordObject.init();
console.log(wordObject.display());
function askLetter(){
	inquirer.prompt([
	{
		type:"input",
		name: "guess",
		message: "What letter do you guess? If you are done then say no"
	},
]).then(function(data){
	if (data.guess !="no"){
		wordObject.updateLetter(data.guess);
		console.log(wordObject.display());
		askLetter();
	}
});
};
askLetter();
