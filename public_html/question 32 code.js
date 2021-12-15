function avg(nbr) {
    return nbr/userInput.length;
}

//input 7 daily sales totals
var userInput = [];
var l=0; 

while(l<7) {
    userInput.push(Number(prompt("Enter daily sales")));
    l=l+1;
}

//weekly sales totals
var wkTotal = 0;
for(var i=0;i < userInput.length; i++) {
    wkTotal = wkTotal + userInput[i];
}

//Average Daily sales total
var avgDailyTotal = avg(wkTotal);

//highest and lowest daily sales
var highest = userInput[1];
for(var i =0; i < userInput.length;i++){
    if(userInput[i]>highest) {
        highest = userInput[i];
    }
}
var lowest = userInput[1];
for(var i =0;i<userInput.length;i++) {
    if(userInput[i] <lowest){
        lowest=userInput[i]; 
    }
}

//output
document.write("The Highest Sale Was:" + highest);
document.write("<br><br>The Lowest Sale Was: " + lowest);
document.write("<br><br>The Average Daily Sale Was: " + avgDailyTotal);
document.write("<br><br>The Weekly Sales Total Was: " + wkTotal); 