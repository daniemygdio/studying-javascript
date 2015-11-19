var board = [];

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
	renderBoard();
}

function loadBoard() {
	board = [0, 0, 0, 0, 0];
}

function renderBoard() {
	var image = "", i = 0;

	for (i = 0; i < board.length; i++) {
		switch() {
			case 0:
				// hidden square
				image = "hidden";
				break;
			case 1:
				// exposed blank square
				image = "exposedBlank";
				break;
			case 2:
				// exposed bomb
				image = "exposedBomb";
				break;
			case 3:
				// flagged square
				image = "flagged";
				break;
			case 4:
				// exposed one
				image = "exposedOne";
				break;
			case 5:
				// exposed two
				image = "exposedTwo";
				break;
			case 6:
				// exposed three
				image = "exposedThree";
				break;
			case 7:
				// exposed four
				image = "exposedFour";
				break;			
		}

		var canvas = document.getElementById("board"),
		ctx = canvas.getContext("2d");
		img = document.getElementById(image);
		ctx.drawImage(img, i+30, i+30);
	}	
}