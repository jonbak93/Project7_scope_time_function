function maybe() {
    var x = document.getElementById("ifStatement").value; //setting input generated value 
    var text;
    if (x >= 18) { text = "You are of age!"; } else { //deciphering with if/else statement whether
        //someone is of age
        text = "You are not of age.";
    }
    document.getElementById("demo").innerHTML = text; //returning the value to the HTML page
}



function Time_function() {
    var Time = new Date().getHours(); //getting the date and time
    var Reply; //creating a variable that can change depending on the time
    if (Time < 12 == Time > 0) { //if the current time is less than 12 and it is greater than 0, it's morning time
        Reply = "It is morning time!";
    } else if (Time > 12 == Time < 10) { //if the current time is less than 10, it's afternoon
        Reply = "It is the afternoon.";
    } else {
        Reply = "It is evening time"; //if neither then it is evening
    }
    document.getElementById("Time_of_day").innerHTML = Reply; //returning Reply to HTML page
}


function local() {
    var x = "Local$ only, brah!"; //setting the x variable inside the function (locally)
    document.getElementById("local").innerHTML = x; //returning the x variable to HTML
}

var y = "Prestige Worldwide!"; //setting the y variable on the outside of function so any function can use it 

function global() {
    document.getElementById("global").innerHTML = y;
}



function DevTools() { //calling a function that uses x as a variable, but it does not mean anything bc it's a local variable
    if (y === x) { //inside another function
        console.log("You local?")
    } else { "Nah, BRAH" }
}



DevTools();
local();
global();
Time_function();
maybe();
