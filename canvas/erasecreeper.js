var canvas = document.getElementById("myCanvas"),
			ctx = canvas.getContext("2d"),
			elementTop = canvas.offsetTop,
			elementLeft = canvas.offsetLeft,
			elements = [];

canvas.addEventListener('click', function(event) {
	var x = event.pageX - elementLeft,
		y = event.pageY - elementTop;

	// Collision detection between clicked offset and element.
    elements.forEach(function(element) {
        if (y > element.top && y < element.top + element.height 
            && x > element.left && x < element.left + element.width) {
            element.colour = "#ffffff";
        	ctx.fillStyle = element.colour;
        	ctx.fillRect(element.left, element.top, element.width, element.height);
        }
    });

}, false);

createCreeper();	

// rendering the elements
elements.forEach(function(element) {
	ctx.fillStyle = element.colour;
	ctx.fillRect(element.left, element.top, 100, element.height);
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
		width: 100,
		height: 100,
		top: 0,
		left: 0
	});

	elements.push({
		colour: '#00cc00',
		width: 100,
		height: 100,
		top: 0,
		left: 100
	});

	elements.push({
		colour: '#008000',
		width: 100,
		height: 100,
		top: 0,
		left: 200
	});

	elements.push({
		colour: '#008000',
		width: 100,
		height: 100,
		top: 0,
		left: 300
	});

	elements.push({
		colour: '#ffffff',
		width: 100,
		height: 100,
		top: 0,
		left: 400
	});

	elements.push({
		colour: '#008000',
		width: 100,
		height: 100,
		top: 0,
		left: 500
	});

	elements.push({
		colour: '#008000',
		width: 100,
		height: 100,
		top: 0,
		left: 600
	});

	elements.push({
		colour: '#008000',
		width: 100,
		height: 100,
		top: 0,
		left: 700
	});

	elements.push({
		colour: '#008000',
		width: 100,
		height: 100,
		top: 100,
		left: 0
	});

	elements.push({
		colour: '#008000',
		width: 100,
		height: 100,
		top: 100,
		left: 0
	});

	elements.push({
		colour: '#008000',
		width: 100,
		height: 100,
		top: 100,
		left: 100
	});

	elements.push({
		colour: '#00cc00',
		width: 100,
		height: 100,
		top: 100,
		left: 200
	});

	elements.push({
		colour: '#008000',
		width: 100,
		height: 100,
		top: 100,
		left: 300
	});

	elements.push({
		colour: '#00cc00',
		width: 100,
		height: 100,
		top: 100,
		left: 400
	});

	elements.push({
		colour: '#00cc00',
		width: 100,
		height: 100,
		top: 100,
		left: 500
	});

	elements.push({
		colour: '#008000',
		width: 100,
		height: 100,
		top: 100,
		left: 600
	});

	elements.push({
		colour: '#00cc00',
		width: 100,
		height: 100,
		top: 100,
		left: 700
	});

	elements.push({
		colour: '#00cc00',
		width: 100,
		height: 100,
		top: 200,
		left: 0
	});

	elements.push({
		colour: '#000000',
		width: 100,
		height: 100,
		top: 200,
		left: 100
	});

	elements.push({
		colour: '#000000',
		width: 100,
		height: 100,
		top: 200,
		left: 200
	});

	elements.push({
		colour: '#008000',
		width: 100,
		height: 100,
		top: 200,
		left: 300
	});

	elements.push({
		colour: '#000000',
		width: 100,
		height: 100,
		top: 200,
		left: 100
	});

	elements.push({
		colour: '#00cc00',
		width: 100,
		height: 100,
		top: 200,
		left: 400
	});

	elements.push({
		colour: '#000000',
		width: 100,
		height: 100,
		top: 200,
		left: 500
	});
	
	elements.push({
		colour: '#000000',
		width: 100,
		height: 100,
		top: 200,
		left: 600
	});
				
	elements.push({
		colour: '#ffffff',
		width: 100,
		height: 100,
		top: 200,
		left: 700
	});
	
	elements.push({
		colour: '#008000',
		width: 100,
		height: 100,
		top: 300,
		left: 0
	});
	
	elements.push({
		colour: '#008000',
		width: 100,
		height: 100,
		top: 300,
		left: 0
	});

	elements.push({
		colour: '#000000',
		width: 100,
		height: 100,
		top: 300,
		left: 100
	});

	elements.push({
		colour: '#000000',
		width: 100,
		height: 100,
		top: 300,
		left: 200
	});

	elements.push({
		colour: '#00cc00',
		width: 100,
		height: 100,
		top: 300,
		left: 300
	});

	elements.push({
		colour: '#008000',
		width: 100,
		height: 100,
		top: 300,
		left: 400
	});
	
	elements.push({
		colour: '#000000',
		width: 100,
		height: 100,
		top: 300,
		left: 500
	});

	elements.push({
		colour: '#000000',
		width: 100,
		height: 100,
		top: 300,
		left: 600
	});

	elements.push({
		colour: '#008000',
		width: 100,
		height: 100,
		top: 300,
		left: 700
	});

	elements.push({
		colour: '#00cc00',
		width: 100,
		height: 100,
		top: 400,
		left: 0
	});

	elements.push({
		colour: '#008000',
		width: 100,
		height: 100,
		top: 400,
		left: 100
	});

	elements.push({
		colour: '#008000',
		width: 100,
		height: 100,
		top: 400,
		left: 200
	});
	
	elements.push({
		colour: '#000000',
		width: 100,
		height: 100,
		top: 400,
		left: 300
	});

	elements.push({
		colour: '#000000',
		width: 100,
		height: 100,
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
		width: 100,
		height: 100,
		top: 400,
		left: 600
	});

	elements.push({
		colour: '#00cc00',
		width: 100,
		height: 100,
		top: 400,
		left: 700
	});

	elements.push({
		colour: '#000000',
		width: 100,
		height: 100,
		top: 400,
		left: 300
	});
	
	elements.push({
		colour: '#008000',
		width: 100,
		height: 100,
		top: 500,
		left: 0
	});
	
	elements.push({
		colour: '#00cc00',
		width: 100,
		height: 100,
		top: 500,
		left: 100
	});

	elements.push({
		colour: '#000000',
		width: 100,
		height: 100,
		top: 500,
		left: 200
	});

	elements.push({
		colour: '#000000',
		width: 100,
		height: 100,
		top: 500,
		left: 300
	});

	elements.push({
		colour: '#000000',
		width: 100,
		height: 100,
		top: 500,
		left: 400
	});

	elements.push({
		colour: '#000000',
		width: 100,
		height: 100,
		top: 500,
		left: 500
	});

	elements.push({
		colour: '#008000',
		width: 100,
		height: 100,
		top: 500,
		left: 600
	});

	elements.push({
		colour: '#00cc00',
		width: 100,
		height: 100,
		top: 500,
		left: 700
	});

	elements.push({
		colour: '#008000',
		width: 100,
		height: 100,
		top: 600,
		left: 0
	});

	elements.push({
		colour: '#008000',
		width: 100,
		height: 100,
		top: 600,
		left: 100
	});

	elements.push({
		colour: '#000000',
		width: 100,
		height: 100,
		top: 600,
		left: 200
	});

	elements.push({
		colour: '#000000',
		width: 100,
		height: 100,
		top: 600,
		left: 300
	});

	elements.push({
		colour: '#000000',
		width: 100,
		height: 100,
		top: 600,
		left: 400
	});

	elements.push({
		colour: '#000000',
		width: 100,
		height: 100,
		top: 600,
		left: 500
	});

	elements.push({
		colour: '#008000',
		width: 100,
		height: 100,
		top: 600,
		left: 600
	});

	elements.push({
		colour: '#008000',
		width: 100,
		height: 100,
		top: 600,
		left: 700
	});

	elements.push({
		colour: '#008000',
		width: 100,
		height: 100,
		top: 700,
		left: 0
	});

	elements.push({
		colour: '#00cc00',
		width: 100,
		height: 100,
		top: 700,
		left: 100
	});

	elements.push({
		colour: '#000000',
		width: 100,
		height: 100,
		top: 700,
		left: 200
	});

	elements.push({
		colour: '#008000',
		width: 100,
		height: 100,
		top: 700,
		left: 300
	});

	elements.push({
		colour: '#00cc00',
		width: 100,
		height: 100,
		top: 700,
		left: 400
	});

	elements.push({
		colour: '#000000',
		width: 100,
		height: 100,
		top: 700,
		left: 500
	});

	elements.push({
		colour: '#008000',
		width: 100,
		height: 100,
		top: 700,
		left: 600
	});

	elements.push({
		colour: '#00cc00',
		width: 100,
		height: 100,
		top: 700,
		left: 700
	});
} 