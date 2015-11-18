var canvas = document.getElementById("myCanvas"),
			ctx = canvas.getContext("2d"),
			elementTop = canvas.offsetTop,
			elementLeft = canvas.offsetLeft,
			elements = [];

canvas.addEventListener('click', function(event) {
	var offset = canvas.width / 8,
		clickX = event.pageX,
		clickY = event.pageY,
		row = Math.floor(clickX / offset),
		column = Math.floor(clickY / offset),
		index = (row * offset) + column;

	elements[index] = null;

	ctx.fillStyle = "#000000";
	ctx.fillRect((row*offset), (column*offset), offset, offset);

}, false);

createCreeper();

// rendering the elements
elements.forEach(function(element) {
	ctx.fillStyle = element.colour;
	ctx.fillRect(element.left, element.top, 100, 100);
});

/*var i = 0, j = 0;
for (i = 0; i < 8; i++) {
	for (j = 0; j < 8; j++) {
		ctx.fillStyle = element.colour;
		ctx.fillRect(element.left, element.top, element.width, element.height);
	}
}*/

function createCreeper() {
	elements.push({
		colour: '#00cc00',
		top: 0,
		left: 0
	});

	elements.push({
		colour: '#00cc00',
		top: 0,
		left: 100
	});

	elements.push({
		colour: '#008000',
		top: 0,
		left: 200
	});

	elements.push({
		colour: '#008000',
		top: 0,
		left: 300
	});

	elements.push({
		colour: '#ffffff',
		top: 0,
		left: 400
	});

	elements.push({
		colour: '#008000',
		top: 0,
		left: 500
	});

	elements.push({
		colour: '#008000',
		top: 0,
		left: 600
	});

	elements.push({
		colour: '#008000',
		top: 0,
		left: 700
	});

	elements.push({
		colour: '#008000',
		top: 100,
		left: 0
	});

	elements.push({
		colour: '#008000',
		top: 100,
		left: 0
	});

	elements.push({
		colour: '#008000',
		top: 100,
		left: 100
	});

	elements.push({
		colour: '#00cc00',
		top: 100,
		left: 200
	});

	elements.push({
		colour: '#008000',
		top: 100,
		left: 300
	});

	elements.push({
		colour: '#00cc00',
		top: 100,
		left: 400
	});

	elements.push({
		colour: '#00cc00',
		top: 100,
		left: 500
	});

	elements.push({
		colour: '#008000',
		top: 100,
		left: 600
	});

	elements.push({
		colour: '#00cc00',
		top: 100,
		left: 700
	});

	elements.push({
		colour: '#00cc00',
		top: 200,
		left: 0
	});

	elements.push({
		colour: '#000000',
		top: 200,
		left: 100
	});

	elements.push({
		colour: '#000000',
		top: 200,
		left: 200
	});

	elements.push({
		colour: '#008000',
		top: 200,
		left: 300
	});

	elements.push({
		colour: '#000000',
		top: 200,
		left: 100
	});

	elements.push({
		colour: '#00cc00',
		top: 200,
		left: 400
	});

	elements.push({
		colour: '#000000',
		top: 200,
		left: 500
	});

	elements.push({
		colour: '#000000',
		top: 200,
		left: 600
	});

	elements.push({
		colour: '#ffffff',
		top: 200,
		left: 700
	});

	elements.push({
		colour: '#008000',
		top: 300,
		left: 0
	});

	elements.push({
		colour: '#008000',
		top: 300,
		left: 0
	});

	elements.push({
		colour: '#000000',
		top: 300,
		left: 100
	});

	elements.push({
		colour: '#000000',
		top: 300,
		left: 200
	});

	elements.push({
		colour: '#00cc00',
		top: 300,
		left: 300
	});

	elements.push({
		colour: '#008000',
		top: 300,
		left: 400
	});

	elements.push({
		colour: '#000000',
		top: 300,
		left: 500
	});

	elements.push({
		colour: '#000000',
		top: 300,
		left: 600
	});

	elements.push({
		colour: '#008000',
		top: 300,
		left: 700
	});

	elements.push({
		colour: '#00cc00',
		top: 400,
		left: 0
	});

	elements.push({
		colour: '#008000',
		top: 400,
		left: 100
	});

	elements.push({
		colour: '#008000',
		top: 400,
		left: 200
	});

	elements.push({
		colour: '#000000',
		top: 400,
		left: 300
	});

	elements.push({
		colour: '#000000',
		top: 400,
		left: 400
	});

	elements.push({
		colour: '#ffffff',
		width: 100,
		height: 100,
		top: 400,
		left: 500
	});

	elements.push({
		colour: '#008000',
		top: 400,
		left: 600
	});

	elements.push({
		colour: '#00cc00',
		top: 400,
		left: 700
	});

	elements.push({
		colour: '#000000',
		top: 400,
		left: 300
	});

	elements.push({
		colour: '#008000',
		top: 500,
		left: 0
	});

	elements.push({
		colour: '#00cc00',
		top: 500,
		left: 100
	});

	elements.push({
		colour: '#000000',
		top: 500,
		left: 200
	});

	elements.push({
		colour: '#000000',
		top: 500,
		left: 300
	});

	elements.push({
		colour: '#000000',
		top: 500,
		left: 400
	});

	elements.push({
		colour: '#000000',
		top: 500,
		left: 500
	});

	elements.push({
		colour: '#008000',
		top: 500,
		left: 600
	});

	elements.push({
		colour: '#00cc00',
		top: 500,
		left: 700
	});

	elements.push({
		colour: '#008000',
		top: 600,
		left: 0
	});

	elements.push({
		colour: '#008000',
		top: 600,
		left: 100
	});

	elements.push({
		colour: '#000000',
		top: 600,
		left: 200
	});

	elements.push({
		colour: '#000000',
		top: 600,
		left: 300
	});

	elements.push({
		colour: '#000000',
		top: 600,
		left: 400
	});

	elements.push({
		colour: '#000000',
		top: 600,
		left: 500
	});

	elements.push({
		colour: '#008000',
		top: 600,
		left: 600
	});

	elements.push({
		colour: '#008000',
		top: 600,
		left: 700
	});

	elements.push({
		colour: '#008000',
		top: 700,
		left: 0
	});

	elements.push({
		colour: '#00cc00',
		left: 100
	});

	elements.push({
		colour: '#000000',
		top: 700,
		left: 200
	});

	elements.push({
		colour: '#008000',
		top: 700,
		left: 300
	});

	elements.push({
		colour: '#00cc00',
		top: 700,
		left: 400
	});

	elements.push({
		colour: '#000000',
		top: 700,
		left: 500
	});

	elements.push({
		colour: '#008000',
		top: 700,
		left: 600
	});

	elements.push({
		colour: '#00cc00',
		top: 700,
		left: 700
	});
}