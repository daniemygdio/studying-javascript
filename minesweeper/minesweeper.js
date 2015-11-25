"use strict";
var canvas = document.getElementById('board');
var context = canvas.getContext('2d');

var board = [];
var bombs = [];

const HIDDEN_BLANK_SQUARE = 0,
	FLAGGED_BLANK_SQUARE = 1,
	HIDDEN_BOMB_SQUARE = 2,
	FLAGGED_BOMB_SQUARE = 3,
	EXPOSED_BOMB_SQUARE = 4,
	EXPOSED_BLANK_SQUARE = 5,
	EXPOSED_NUMBER_ONE = 6,
	EXPOSED_NUMBER_TWO = 7,
	EXPOSED_NUMBER_THREE = 8,
	EXPOSED_NUMBER_FOUR = 9;

const SQUARE_WIDTH = 30, SQUARE_HEIGHT = 30;

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

	loadBoard();
	placeBomb(4, 5);
	placeBomb(1, 1);

	renderBoard();

	console.log("Is bomb: "+isBomb(7, 5));
};

/*
	Places a bomb in the board.
*/
function placeBomb(index) {
	//var index = row * offset + column;

	bombs.push(index);
	board[index] = HIDDEN_BOMB_SQUARE;	
}

/*
	Returns true if the given position in the board is a bomb and false otherwise.
	False if index is out of bounds of board[].
*/
function isBomb(index) {
	if (index > board.length || index < 0) {
		return false;
	}

	if(board[index] == HIDDEN_BOMB_SQUARE 
		|| board[index] == EXPOSED_BOMB_SQUARE
		|| board[index] == FLAGGED_BOMB_SQUARE) {
		return true;
	}

	return false;
}

/*
	Creates the array representing the board to be rendered.
*/
function loadBoard(width, height, numberOfBombs) {
	if (width <= 0 || isNaN(width)) {
		width = 25; // standard width
	}

	if (height <= 0 || isNaN(height)) {
		height = 25; // standard height
	}

	var sizeOfBoard = width * height;
	offset = width;

	var i = 0;
	for (i = 0; i < sizeOfBoard; i++) {
		board[i] = HIDDEN_BLANK_SQUARE;
	}

	// PLACE BOMS
	if (numberOfBombs <= 0 || isNaN(numberOfBombs)) {
		if (numberOfBombs >= sizeOfBoard) {
			numberOfBombs = sizeOfBoard - (sizeOfBoard*0.1);
		}

		numberOfBombs = Math.floor(sizeOfBoard*0.3);
	}

	console.log(width);
	console.log(height);
	console.log(numberOfBombs);		

	for(i = 0; i < numberOfBombs; i++) {
		var bomb = getRandomIntInclusive(0, (sizeOfBoard-1));

		if (isBomb()) {
			i--;
		} else {
			placeBomb(bomb);
		}
	}
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
			case HIDDEN_BLANK_SQUARE:
				// hidden square
				image_name = "hidden";
				break;
			case FLAGGED_BLANK_SQUARE:
				// exposed blank square
				image_name = "flagged";
				break;
			case EXPOSED_BLANK_SQUARE:
				// exposed bomb
				image_name = "exposedBlank";
				break;
			case HIDDEN_BOMB_SQUARE:
				// flagged square
				image_name = "hidden";
				break;
			case EXPOSED_BOMB_SQUARE:
				// exposed one
				image_name = "exposedBomb";
				break;
			case FLAGGED_BOMB_SQUARE:
				// exposed two
				image_name = "flagged";
				break;
			case EXPOSED_NUMBER_ONE:
				// exposed three
				image_name = "exposedOne";
				break;
			case EXPOSED_NUMBER_TWO:
				// exposed four
				image_name = "exposedTwo";
				break;	
			case EXPOSED_NUMBER_THREE:
				// exposed four
				image_name = "exposedThree";
				break;				
			case EXPOSED_NUMBER_FOUR:
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
		console.log(board.toString());
	}
}

/*
	Exposes all bombs.
	TODO: make game stop.
*/
function gameOver() {
	var i = 0;

	// expose all the bombs, but not the flagged squares
	// #1 - iterate over array looking for HIDDEN_BOMB_SQUARE
	// #2 - find them, make them EXPOSED_HIDDEN_BOMBS
	// #3 - LATER - make something to stop new changes - or restart game

	for (i = 0; i < board.length; i++) {
		if(board[i] == HIDDEN_BOMB_SQUARE) {
			board[i] = EXPOSED_BOMB_SQUARE;
		}
	}
}

/*
	Exposes blank area.
*/
function exposeBlankArea(index) {
	
}

function exposeBlankSquare(index) {
	if (isNaN(index) || index > board.length || index < 0) {
		return -1;
	}
	
	switch(countBombsAround(index)) {
		case 0: board[index] = EXPOSED_BLANK_SQUARE; break;
		case 1: board[index] = EXPOSED_NUMBER_ONE; break;
		case 2: board[index] = EXPOSED_NUMBER_TWO; break;
		case 3: board[index] = EXPOSED_NUMBER_THREE; break;
		case 4: board[index] = EXPOSED_NUMBER_FOUR; break;
		default: board[index] = EXPOSED_BLANK_SQUARE; break;
	}
}

function exposeSquare(index) {
	if (isNaN(index) || index > board.length || index < 0) {
		return -1;
	}
	
	if(board[index] == HIDDEN_BOMB_SQUARE 
		&& board[index] != FLAGGED_BOMB_SQUARE) {
		gameOver();
	} 

	if(board[index] == HIDDEN_BLANK_SQUARE
		&& board[index] != FLAGGED_BLANK_SQUARE) {
		exposeBlankSquare(index);
	}

}

/*
	Flags a square or removes the flag if it's already flagged.
*/
function flagSquare(index) {
	if (isNaN(index) || index > board.length || index < 0) {
		return -1;
	}

	if(board[index] == HIDDEN_BOMB_SQUARE) {
		board[index] = FLAGGED_BOMB_SQUARE;
		return;
	}

	if(board[index] == HIDDEN_BLANK_SQUARE) {
		board[index] = FLAGGED_BLANK_SQUARE;
		return;
	}

	if(board[index] == FLAGGED_BLANK_SQUARE) {
		board[index] = HIDDEN_BLANK_SQUARE;
		return;
	}

	if(board[index] == FLAGGED_BOMB_SQUARE) {
		board[index] = HIDDEN_BOMB_SQUARE;
		return;
	}
}

function countBombsAround(index) {
	var count = 0;

	if (isNaN(index) || index > board.length || index < 0) {
		return -1;
	}
	
	var x = Math.floor(index / offset),
		y = index - (x*offset);

	/*
		ooo
		xmo  y - 1
		ooo
	*/	
	if(((index - (x*offset)) != 0) && isBomb(index-1)) { count++; }
	 
	/*	
		oxo
		omo  y = 0
		oxo
	*/
	if((Math.floor(index / offset) > 0) && isBomb(index-offset)) { count++; }
	if(isBomb(index+offset)) { count++; }
	
	/*
		ooo
		omx  y + 1
		ooo
	*/	
	if(((index - (x*offset)) != (offset-1)) && isBomb(index+1)) { count++; }
	
	return count;
}


canvas.addEventListener('click', function (event) {
	var clickX = event.pageX,
		clickY = event.pageY,
		row = Math.floor(clickX / SQUARE_HEIGHT),
		column = Math.floor(clickY / SQUARE_WIDTH),
		index = (column * offset) + row;

	exposeSquare(index);
	renderBoard();
	
}, false);

canvas.addEventListener('mousedown', function (event) {
    var clickX = event.pageX,
		clickY = event.pageY,
		row = Math.floor(clickX / SQUARE_HEIGHT),
		column = Math.floor(clickY / SQUARE_WIDTH),
		index = (column * offset) + row;

    var right = 2;
   	if(event.button === right){
        flagSquare(index);
        renderBoard();
    }
}, false);

canvas.oncontextmenu = function (event) {
    event.preventDefault();
};
