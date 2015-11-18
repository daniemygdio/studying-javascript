var canvas = document.getElementById("myCanvas"),
			ctx = canvas.getContext("2d"),
			elementTop = canvas.offsetTop,
			elementLeft = canvas.offsetLeft,
			elements = [];

canvas.addEventListener('click', function(event) {
	var offset = canvas.width / 8,
		clickX = event.pageX,
		clickY = event.pageY,
		positionX = Math.floor(clickX / offset),
		positionY = Math.floor(clickY / offset);

	ctx.fillStyle = "#000000";
	ctx.fillRect((positionX*offset), (positionY*offset), offset, offset);

}, false);