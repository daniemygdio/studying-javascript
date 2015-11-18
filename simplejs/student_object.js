
var student = {
	name:"Danielle", 
	id:"56524", 
	age:"21", 
	grades: function() {
		return "C for student " + this.name;
	}
};

var studentName = "", 
	studentId = "", 
	studentAge = "", 
	studentGrades = "";

studentName = student.name;
studentId = student.id;
studentAge = student.age, 
studentGrades = student.grades;

document.getElementById("name").innerHTML = studentName;
document.getElementById("grade").innerHTML = student.grades();
