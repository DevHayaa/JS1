//1:Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

var a = 10;
document.write("<h1>Result:</h1>" + "<br>")
document.write("<p>The value of a is: 10</p>")


document.write("The value of a is:" + ++a + "<br>")
document.write("Now the value of a is:" + a + "<br>")

document.write("The value of a is:" + a++ + "<br>")
document.write("Now the value of a is:" + a + "<br>")


document.write("The value of a is:" + --a + "<br>")
document.write("Now the value of a is:" + a + "<br>")

document.write("The value of a is:" + a-- + "<br>")
document.write("Now the value of a is:" + a + "<br>")


// 3. Write a program that takes input a name from user &
// greet the user.


var greetuser = prompt("Enter your Name")

alert("Hello Ma'am," + greetuser)

var subject1 = "English";
var subject2 = "Math";
var subject3 = "Urdu";

        
var totalMarks1 = 100;
var totalMarks2 = 100;
var totalMarks3 = 100;

var obtainedMarks1 = 80;

var obtainedMarks2 = 76;
var obtainedMarks3 = 60;

        
        var totaltoMarks = totalMarks1 + totalMarks2 + totalMarks3;
        var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
        var percentage = ((totalObtainedMarks / (totaltoMarks * 3)) * 100) + '%';


         
        var resultTable = "<table border='1'>";
        resultTable += "<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>";
        resultTable += "<tr><td>" + subject1 + "</td><td>" + totalMarks1 + "</td><td>" + obtainedMarks1 + "</td><td>" + percentage +"</td></tr>";
        resultTable += "<tr><td>" + subject2 + "</td><td>" + totalMarks2 + "</td><td>" + obtainedMarks2 + "</td><td>" + percentage +"</td></tr>";
        resultTable += "<tr><td>" + subject3 + "</td><td>" + totalMarks3 + "</td><td>" + obtainedMarks3 + "</td><td>" + percentage +"</td></tr>";
        resultTable += "<tr><td>" + totaltoMarks + "</td><td>" + totalObtainedMarks + "</td><td>" + percentage + "</td></tr>";

        resultTable += "</table>";

        // Display the result table in the browser
        document.write(resultTable)


