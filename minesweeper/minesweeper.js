var canvas = document.getElementById('board');
var context = canvas.getContext('2d');

var board = [];
var bombs = [];

var offset = 0; // width of the board to help calculate board from 1D array

window.onload = function() {
	// hiding img elements used to retrieve the images for the canvas
	document.getElementById("exposedBlank").style.display = "none";
	document.getElementById("exposedBomb").style.display = "none";
	document.getElementById("exposedOne").style.display = "none";
	document.getElementById("exposedTwo").style.display = "none";
	document.getElementById("exposedThree").style.display = "none";
	document.getElementById("exposedFour").style.display = "none";
	document.getElementById("hidden").style.display = "none";
	document.getElementById("flagged").style.display = "none";

	loadBoard(0,0,5);

	placeBomb(4, 5);
	placeBomb(1, 1);

	renderBoard();

	console.log("Is bomb: "+isBomb(7, 5));

};

/*
	Places a bomb in the board.
*/
function placeBomb(row, column) {
	var index = row * offset + column;

	bombs.push(index);
}

/*
	Returns true if the given position in the board is a bomb and false otherwise.
*/
function isBomb(index) {	
	if (bombs.indexOf(index) != -1) {
		return true;
	}

	return false;
}

/*
	Creates the array representing the board to be rendered.
*/
function loadBoard(width, height, numberOfBombs) {
	if (width <= 0 || isNaN(width)) {
		width = 25;
	}

	if (height <= 0 || isNaN(height)) {
		height = 25;
	}

	var sizeOfBoard = width * height;
	offset = width;

	var i = 0;
	for (i = 0; i < sizeOfBoard; i++) {
		board[i] = 0;
	}

	// PLACE BOMS
	if (numberOfBombs <= 0 || isNaN(numberOfBombs)) {
		if (numberOfBombs >= sizeOfBoard) {
			numberOfBombs = sizeOfBoard - (sizeOfBoard*0.1);
		}

		numberOfBombs = Math.floor(sizeOfBoard*0.5);
	}

	console.log(width);
	console.log(height);
	console.log(numberOfBombs);		

	for(i = 0; i < numberOfBombs; i++) {
		var bomb = getRandomIntInclusive(0, sizeOfBoard);

		if (bombs.indexOf(bomb) != -1) {
			i--;
		} else {
			placeBomb(bomb);
			board[bomb] = 2;
		}
	}

	// CALCULATE NUMBERS AROUND BOMBS

}

/*
	Returns a random integer between min (included) and max (included)
	Using Math.round() will give you a non-uniform distribution!
*/
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*
	Renders the array representing the board.
*/
function renderBoard() {
	var image_name = "", image = null, i = 0;

	for (i = 0; i < board.length; i++) {
		
		switch(board[i]) {
			case 0:
				// hidden square
				image_name = "hidden";
				break;
			case 1:
				// exposed blank square
				image_name = "exposedBlank";
				break;
			case 2:
				// exposed bomb
				image_name = "exposedBomb";
				break;
			case 3:
				// flagged square
				image_name = "flagged";
				break;
			case 4:
				// exposed one
				image_name = "exposedOne";
				break;
			case 5:
				// exposed two
				image_name = "exposedTwo";
				break;
			case 6:
				// exposed three
				image_name = "exposedThree";
				break;
			case 7:
				// exposed four
				image_name = "exposedFour";
				break;	
			default:
				image_name = "hidden";
				break;
		}
		
		var row = Math.floor(i / offset),
			column = i - (row*offset);

		image = document.getElementById(image_name);
		context.drawImage(image, column*30, row*30);	
	}
}