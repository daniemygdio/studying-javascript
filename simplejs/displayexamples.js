/*JavaScript Display Possibilities
JavaScript can "display" data in different ways:

Writing into an alert box, using window.alert().
Writing into the HTML output using document.write().
Writing into an HTML element, using innerHTML.
Writing into the browser console, using console.log().*/

function chooseDisplay() {
	var choice = 0;

	choice = document.getElementById("choice").value;
	window.alert(choice);	

	if (isNaN(choice) || choice < 1 || choice > 4) {
        document.getElementById("answer").innerHTML = "Invalid input.";
	} if (choice == 1) {
		window.alert(choice);	
	} else if (choice == 2) {
		document.write(choice);
	} else if (choice == 3) {
		document.getElementById("answer").innerHTML = "HERE";
	} else if (choice == 4) {
		console.log(choice);
	}	
}
	