window.onload = function() {
	document.getElementById("exposedBlank").style.display = "none";
	document.getElementById("exposedBomb").style.display = "none";
	document.getElementById("exposedOne").style.display = "none";
	document.getElementById("exposedTwo").style.display = "none";
	document.getElementById("exposedThree").style.display = "none";
	document.getElementById("exposedFour").style.display = "none";
	document.getElementById("hidden").style.display = "none";
	document.getElementById("flagged").style.display = "none";

	var canvas = document.getElementById("board"),
		ctx = canvas.getContext("2d");
		img = document.getElementById("hidden");

	ctx.drawImage(img, 10, 10);
}