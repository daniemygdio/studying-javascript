var board = [];
var bombs = [];

var canvas = document.getElementById('board');
var context = canvas.getContext('2d');

window.onload = function() {
	// hiding images used in the canvas
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

	document.getElementById("text").innerHTML = isBomb(7, 5);

};

/*
	Places a bomb in the board.
*/
function placeBomb(row, column) {
	var offset = 25;
	var index = row * offset + column;

	bombs.push(index);
}

/*
	Returns true if the given position in the board is a bomb and false otherwise.
*/
function isBomb(row, column) {
	var offset = 25;
	var index = row * offset + column;

	if (bombs.indexOf(index) != -1) {
		return true;
	}

	return false;
}

/*
	Creates the array representing the board to be rendered.
*/
function loadBoard() {
	board = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	
/*
	board = [0, 0, 0, 0, 0,
			 1, 2, 3, 4, 5,
			 0, 0, 0, 0, 0,
			 0, 0, 0, 0, 0,
			 0, 0, 0, 0, 0,];*/

}

/*
	Renders the array representing the board.
*/
function renderBoard() {
	var image_name = "", image = null, i = 0;
	var offset = 25;

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