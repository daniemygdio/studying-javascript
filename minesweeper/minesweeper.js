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
	EXPOSED_NUMBER_FOUR = 9,
	EXPOSED_NUMBER_FIVE = 10,
	EXPOSED_NUMBER_SIX = 11,
	EXPOSED_NUMBER_SEVEN = 12,
	EXPOSED_NUMBER_EIGHT = 13;

const SQUARE_WIDTH = 30, SQUARE_HEIGHT = 30;

var boardWidth = 0; // width of the board to help calculate board from 1D array

window.onload = function() {
	// hiding img elements used to retrieve the images for the canvas
	document.getElementById("exposedBlank").style.display = "none";
	document.getElementById("exposedBomb").style.display = "none";
	document.getElementById("exposedOne").style.display = "none";
	document.getElementById("exposedTwo").style.display = "none";
	document.getElementById("exposedThree").style.display = "none";
	document.getElementById("exposedFour").style.display = "none";
	document.getElementById("exposedFive").style.display = "none";
	document.getElementById("exposedSix").style.display = "none";
	document.getElementById("exposedSeven").style.display = "none";
	document.getElementById("exposedEight").style.display = "none";
	document.getElementById("hidden").style.display = "none";
	document.getElementById("flagged").style.display = "none";

	loadBoard();
	renderBoard();
};

/**
* Places a bomb in the board.
*/
function placeBomb(index) {
	//var index = row * boardWidth + column;

	bombs.push(index);
	board[index] = HIDDEN_BOMB_SQUARE;
}

/**
* Returns true if the given position in the board is a bomb and false otherwise.
* False if index is out of bounds of board[].
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

/**
* Creates the array representing the board to be rendered.
*/
function loadBoard(width, height, numberOfBombs) {
	if (width <= 0 || isNaN(width)) {
		width = 25; // standard width
	}

	if (height <= 0 || isNaN(height)) {
		height = 25; // standard height
	}

	var sizeOfBoard = width * height;
	boardWidth = width;

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

	for(i = 0; i < numberOfBombs; i++) {
		var bomb = getRandomIntInclusive(0, (sizeOfBoard-1));

		if (isBomb()) {
			i--;
		} else {
			placeBomb(bomb);
		}
	}
}

/**
* Returns a random integer between min (included) and max (included)
* Using Math.round() will give you a non-uniform distribution!
*/
function getRandomIntInclusive(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
* Renders the array representing the board.
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
			case EXPOSED_NUMBER_FIVE:
				// exposed four
				image_name = "exposedFive";
				break;
			case EXPOSED_NUMBER_SIX:
				// exposed four
				image_name = "exposedSix";
				break;
			case EXPOSED_NUMBER_SEVEN:
				// exposed four
				image_name = "exposedSeven";
				break;
			case EXPOSED_NUMBER_EIGHT:
				// exposed four
				image_name = "exposedEight";
				break;
			default:
				image_name = "hidden";
				break;
		}

		var row = Math.floor(i / boardWidth),
			column = i - (row*boardWidth);

		image = document.getElementById(image_name);
		context.drawImage(image, column*30, row*30);
	}
}

/**
* Exposes all bombs and restarts the game.
*/
function gameOver() {
	var i = 0;

	for (i = 0; i < board.length; i++) {
		if(board[i] == HIDDEN_BOMB_SQUARE) {
			board[i] = EXPOSED_BOMB_SQUARE;
		}
	}

	renderBoard();
	window.alert("GAME OVER!");
	location.reload();
}

/**
* Exposes neighbour blank area.
*/
function exposeNeighbours(index) {
	if(board[index] == HIDDEN_BLANK_SQUARE) {
		board[index] = EXPOSED_BLANK_SQUARE;

		var x = Math.floor(index / boardWidth),
		y = index - (x*boardWidth);

		/*
		xoo
		xmo  y - 1
		xoo
		*/
		if((index - (x*boardWidth)) != 0) {
			exposeSquare(index-1-boardWidth);
		 	exposeSquare(index-1);
			exposeSquare(index-1+boardWidth);
		}

		/*
			oxo
			omo  y = 0
			oxo
		*/
		if(Math.floor(index / boardWidth) > 0) {
			exposeSquare(index-boardWidth);	}

		exposeSquare(index+boardWidth);

		/*
			oox
			omx  y + 1
			oox
		*/
		if((index - (x*boardWidth)) != (boardWidth-1)) {
			exposeSquare(index+1-boardWidth);
			exposeSquare(index+1);
			exposeSquare(index+1+boardWidth);
		}
	}
}

/**
* Exposes a blank square.
*/
function exposeSquare(index) {
	if (isNaN(index) || index > board.length || index < 0) {
		return -1;
	}

	switch(countBombsAround(index)) {
		case 0: exposeNeighbours(index); break;
		case 1: board[index] = EXPOSED_NUMBER_ONE; break;
		case 2: board[index] = EXPOSED_NUMBER_TWO; break;
		case 3: board[index] = EXPOSED_NUMBER_THREE; break;
		case 4: board[index] = EXPOSED_NUMBER_FOUR; break;
		case 5: board[index] = EXPOSED_NUMBER_FIVE; break;
		case 6: board[index] = EXPOSED_NUMBER_SIX; break;
		case 7: board[index] = EXPOSED_NUMBER_SEVEN; break;
		case 8: board[index] = EXPOSED_NUMBER_EIGHT; break;
		default: board[index] = EXPOSED_BLANK_SQUARE; break;
	}
}

/**
* Check which kind of square is the given one and take an action.
*/
function checkSquare(index) {
	if (isNaN(index) || index > board.length || index < 0) {
		return -1;
	}

	if(board[index] == HIDDEN_BOMB_SQUARE
		&& board[index] != FLAGGED_BOMB_SQUARE) {
		gameOver();
	}

	if(board[index] == HIDDEN_BLANK_SQUARE
		&& board[index] != FLAGGED_BLANK_SQUARE) {
		exposeSquare(index);
	}
}

/**
* Flags a square or removes the flag if it's already flagged.
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

/**
* Returns the number of bombs around the given square.
* Returns -1 if invalid input.
*/
function countBombsAround(index) {
	var count = 0;

	if (isNaN(index) || index > board.length || index < 0) {
		return -1;
	}

	var x = Math.floor(index / boardWidth),
		y = index - (x*boardWidth);

	/*
		xoo
		xmo  y - 1
		xoo
	*/
	if(((index - (x*boardWidth)) != 0)
		&& isBomb(index-1-boardWidth)) { count++; }
	if(((index - (x*boardWidth)) != 0)
		&& isBomb(index-1)) { count++; }
	if(((index - (x*boardWidth)) != 0)
		&& isBomb(index-1+boardWidth)) { count++; }

	/*
		oxo
		omo  y = 0
		oxo
	*/
	if((Math.floor(index / boardWidth) > 0)
		&& isBomb(index-boardWidth)) { count++; }
	if(isBomb(index+boardWidth)) { count++; }

	/*
		oox
		omx  y + 1
		oox
	*/
	if(((index - (x*boardWidth)) != (boardWidth-1))
		&& isBomb(index+1-boardWidth)) { count++; }
	if(((index - (x*boardWidth)) != (boardWidth-1))
		&& isBomb(index+1)) { count++; }
	if(((index - (x*boardWidth)) != (boardWidth-1))
		&& isBomb(index+1+boardWidth)) { count++; }

	return count;
}

canvas.addEventListener('mousedown', function (event) {
    var clickX = event.pageX,
		clickY = event.pageY,
		row = Math.floor(clickX / SQUARE_HEIGHT),
		column = Math.floor(clickY / SQUARE_WIDTH),
		index = (column * boardWidth) + row;

    var right = 2, left = 0;
   	if(event.button === right){
        flagSquare(index);
        renderBoard();
    } else if(event.button === left) {
    	var clickX = event.pageX,
		clickY = event.pageY,
		row = Math.floor(clickX / SQUARE_HEIGHT),
		column = Math.floor(clickY / SQUARE_WIDTH),
		index = (column * boardWidth) + row;

		checkSquare(index);
		renderBoard();
    }
}, false);

canvas.oncontextmenu = function (event) {
    event.preventDefault();
};