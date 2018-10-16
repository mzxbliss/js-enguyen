function addNumbers(elem1, elem2) {
  var a = document.getElementById(elem1).value;
  var b = document.getElementById(elem2).value;
  var c = Number(a) + Number(b);
  console.log(c);
  document.getElementById("testResult").innerHTML = c;
}

function subtractNumbers(elem1, elem2) {
  var a = document.getElementById(elem1).value;
  var b = document.getElementById(elem2).value;
  var c = Number(a) - Number(b);
  console.log(c);
  document.getElementById("testResult").innerHTML = c;
}

function multiplyNumbers(elem1, elem2) {
  var a = document.getElementById(elem1).value;
  var b = document.getElementById(elem2).value;
  var c = Number(a) * Number(b);
  console.log(c);
  document.getElementById("testResult").innerHTML = c;
}

function divideNumbers(elem1, elem2) {
  var a = document.getElementById(elem1).value;
  var b = document.getElementById(elem2).value;
  var c = Number(a) / Number(b);
  console.log(c);
  document.getElementById("testResult").innerHTML = c;
}



























//Failed Attempt

// //What is this? Tried a couple of implementations as you can see below. Ended up half implementing a mood calculator. If a user type in the number between 1-6, the output should be an image of a cat. It's a mood guesser.
//
//
//
// //Declare a variable and assign a value
// var x = document.getElementById("result");
//
// // like var name = "your name";
//
// $('#yourButton').on('click', myFunction(){
//     console.log(guessing);
//
// function myFunction() {
//   conole.log('See mhy mood')
//
//       // Get the value of the input field with id="numb"
//       x = document.getElementById("numb").value;
//
//       // If x is Not a Number or less than one or greater than 6
//       if (isNaN(x) || x < 1 || x > 6) {
//           text = "Input not valid";
//       } else {
//           text = "See Below";
//       }
//       document.getElementById("result").innerHTML = text;
//   }
//
//
//     //use your variable somewhere inside this function; use operators here
//
//     // var age = 60;
//     // var food = 0;
//     // var work = true;
//     // if(age > 60) {
//     //     console.log("cat is sad");
//     // }
//     // if(age > 60) {
//     //     console.log("You are feeling old");
//     // };
//     // If(food = 0) {
//     //   console.log("You are feeling hungry")
//     // };
//     // if(age > 60) {
//     //     console.log("You are feeling old")
//     // };
//     // If(work = true) {
//     //   console.log("You are feeling stressed out")
//     // };
//
//
//   //   if(button == "Emma") {
//   //       $('#yourButton').attr('src','./images/sad.png');
//   //
//   //       //Can you reassign lights to "on" in the line below?
//   //       lights = "Emman";
//   //
//   //   //Otherwise, the lights must be on, so turn them off
//   // } else if(button == "Emman") {
//   //       $('#yourButton').attr('src','./images/in-love.png');
//   //
//   //       //Can you reassign lights to "off" in the line below?
//   //       lights = "Emma";
//
//         //Math.random() o to .9
//
//     $('#result').html('Do something');
//     console.log("#yourButton was clicked");
//
//     //Do something cool!
// //}
// // ideas = calculator, number converter, etc
