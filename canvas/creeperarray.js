var canvas = document.getElementById("myCanvas"),
			ctx = canvas.getContext("2d"),
			positionOffset = 8;
			sizeOffset = canvas.width / positionOffset;

var creeper = [0,0,1,1,3,1,1,1,
			   1,1,0,1,0,0,1,0,
			   0,2,2,1,0,2,2,3,
			   1,2,2,0,1,2,2,1,
			   0,1,1,2,2,3,1,0,
			   1,0,2,2,2,2,0,1,
			   1,1,2,2,2,2,1,0,
			   1,3,2,1,0,2,1,0];

renderCreeper();

function renderCreeper() {
	var i = 0;
	for (i = 0; i < 64; i++) {
		var colour = "";
		colour = '#00cc00';
		switch(creeper[i]) {		
			case 0:
				colour = '#ff66ff';
				break;
			case 1:
				colour = '#ff33cc';
				break;
			case 2:
				colour = '#000000';
				break;
			case 3:
				colour = '#ffffff';
				break;
			case null:
				colour = '#cccccc';
				break;
			default:
				colour = '#000000';
				break;
		}

		var row = Math.floor(i / positionOffset),
			column = i - (row*positionOffset);

		ctx.fillStyle = colour;
		ctx.fillRect(column*sizeOffset, row*sizeOffset, sizeOffset, sizeOffset);
	}
}

canvas.addEventListener('click', function(event) {
	var clickX = event.pageX,
		clickY = event.pageY,
		row = Math.floor(clickX / sizeOffset),
		column = Math.floor(clickY / sizeOffset),
		index = (column * positionOffset) + row;

	creeper[index] = null;

	renderCreeper();

}, false);	   

// light green = 0 = '#00cc00'
// dark green = 1 = '#008000'
// black = 2 = "#000000"
// white = 3 = "#ffffff"
// erase = null 
