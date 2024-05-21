 
document.write("<h1>QUESTION 1 </h1>")
 // Take input from the user
        var num1 = +prompt("Enter the first number:");
        var num2 = +prompt("Enter the second number:");

        // Add the numbers
        var sum = num1 + num2;

        // Display the result in the browser
        document.write("<h4>Sum of " + num1 + " and " + num2 + " is: " + sum + "</h4>");


        document.write("<h1>QUESTION 2</h1>")
        var num1 = 10;
        var num2 = 5;
        var subtraction = num1 - num2;
        document.write("Subtraction: " + subtraction + "<br>");

        
        var multiplication = num1 * num2;
        document.write("Multiplication: " + multiplication + "<br>");


        var division = num1 / num2;
        document.write("Division: " + division + "<br>");

        var modulus = num1 % num2;
        document.write("Modulus: " + modulus + "<br>");

        

       document.write("<h1>QUESTION 3 </h1>")
       var ticketPrice = 600;

        var numberOfTickets = 5;
        var totalCost = ticketPrice * numberOfTickets;

        
        document.write("<h4>Total cost to buy " + numberOfTickets + " tickets to a movie is: " + totalCost + " PKR</h4>");

        document.write("<h1>QUESTION 4 </h1>")
        function displayMultiplicationTable(number) {
              document.write("<h2>Table of " + number + "</h2>");
              var result1 = number * 1;
              var result2 = number * 2;
              var result3 = number * 3;
              var result4 = number * 4;
              var result5 = number * 5;
              var result6 = number * 6;
              var result7 = number * 7;
              var result8 = number * 8;
              var result9 = number * 9;
              var result10 = number * 10;
  
              document.write(number + " x 1 = " + result1 + "<br>");
              document.write(number + " x 2 = " + result2 + "<br>");
              document.write(number + " x 3 = " + result3 + "<br>");
              document.write(number + " x 4 = " + result4 + "<br>");
              document.write(number + " x 5 = " + result5 + "<br>");
              document.write(number + " x 6 = " + result6 + "<br>");
              document.write(number + " x 7 = " + result7 + "<br>");
              document.write(number + " x 8 = " + result8 + "<br>");
              document.write(number + " x 9 = " + result9 + "<br>");
              document.write(number + " x 10 = " + result10 + "<br>");
          }
  
          
          var numberToDisplay = 4; 
          displayMultiplicationTable(numberToDisplay);
 
          document.write("<h1>QUESTION 5 </h1>")
          var priceItem1 = 900; 
          var priceItem2 = 400; 
          var quantityItem1 = 6; 
          var quantityItem2 = 2; 
          var shippingCharges = 150; 
  
 
          var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;
  
    
          document.write("<h2>Shopping Cart Receipt</h2>");
          document.write("<p>Price of Item 1: " + priceItem1 + " PKR</p>");
          document.write("<p>Ordered Quantity of Item 1: " + quantityItem1 + "</p>");
          document.write("<p>Price of Item 2: " + priceItem2 + " PKR</p>");
          document.write("<p>Ordered Quantity of Item 2: " + quantityItem2 + "</p>");
          document.write("<p>Shipping Charges: " + shippingCharges + " PKR</p>");
          document.write("<h3>Total Cost: " + totalCost + " PKR</h3>");

          document.write("<h1>QUESTION 6</h1>")
          document.write("<h2>Mark Sheet</h2>")
          var totalMarks = 500;
          var marksObtained = 420;
  
       
          var percentage = (marksObtained / totalMarks) * 100;
  

          document.write("<p>Total Marks: " + totalMarks + "</p>");
          document.write("<p>Marks Obtained: " + marksObtained + "</p>");
          document.write("<h3>Percentage Obtained: " + percentage + "%</h3>");


       document.write("<h1>QUESTION 7</h1>")
        var usDollars = 10;
        var saudiRiyals = 25;

    
        var usdToPkrRate = 104.80;
        var sarToPkrRate = 28;


        var totalInPkr = (usDollars * usdToPkrRate) + (saudiRiyals * sarToPkrRate);

        document.write("<h1>Currency In PKR</h1>");
        document.write("<p>Total currency in PKR: " + totalInPkr + " PKR</p>");


        document.write("<h1>QUESTION 8</h1>")
        var initialNumber = 10;
        var result = ((initialNumber + 5) * 10) / 2;
        document.write(result);
        // var num1 = 5;
        // var num2 = 6;
        // var add = num1 + num2;
        // document.write(add);

        // document.write("<h1>QUESTION 9</h1>")
        // var num3 = 5;
        // var num4 = 6;
        // var multiply = num3 * num4;
        // document.write(multiply);

        // document.write("<h1>Q</h1>")
        // var num5 = 5;
        // var num6 = 6;
        // var divide = num5 / num6;
        // document.write(divide);

        document.write("<h1>QUESTION 9 </h1>")
        var radius = 5; 


        var circumference = 2 * Math.PI * radius;

        var area = Math.PI * radius * radius;
        
document.write("Radius of a circle: " + radius + "<br>");
document.write("The circumference is: " + circumference + "<br>");
document.write("The area is: " + area + "<br>");


document.write("<h1>QUESTION 10</h1>")

var currentyear = 2024;
var birthyear = 2010;
var calculateage =currentyear - birthyear;



document.write("Current Year: "+ currentyear + "<br>");
document.write("Birth Year: "+ birthyear + "<br>");
document.write(" Your Age is: "+ calculateage + "<br>");

document.write("<h1>QUESTION 11</h1>")
var favoriteSnack = "chocolate chip";

// Store your current age into a variable
var currentAge = 15; // Replace 25 with your actual age

// Store a maximum age into a variable
var maximumAge = 65; // Replace 80 with your estimated maximum age

// Store an estimated amount per day (as a number)
var amountPerDay = 5; // Replace 2 with your estimated amount per day

// Calculate how many snacks you would need total for the rest of your life
var yearsRemaining = maximumAge - currentAge;
var daysRemaining = yearsRemaining * 365; // Assuming 365 days in a year
var snacksNeeded = daysRemaining * amountPerDay;

// Output the result
document.write("<h1>The Lifetime Supply Calculator</h1>")
document.write("Fovourite Snack:" + favoriteSnack + "<br>");
document.write("Current Age:" + currentAge + "<br>");
document.write("Estimated maximum age:" + maximumAge + "<br>");
document.write("Amount of snacks per day:" + amountPerDay + "<br>");
document.write("You will need " + snacksNeeded + favoriteSnack + " to last you until the ripe old age of " + maximumAge);
