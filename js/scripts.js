//Back end Logic
var add= function(number1, number2){
    return number1 + number2
  }
  var subtract= function(number1, number2){
    return number1 - number2
  }
  var multiply= function(number1, number2){
    return number1 *number2
  }
  var divide= function(number1, number2){
    return number1 / number2
  }
  function calculate(operator, number1, number2){
    switch (operator){
      case '+':
        return add(number1,number2);
      case '-':
        return subtract(number1,number2);
      case '*':
        return multiply(number1,number2);
      case '/':
        return divide(number1,number2);
       
    }
  }
  calculate('+',8,10);

  //variable 

var egg = { name: "egg", price: 20 };
var bacon = { name: "bacon", price: 30 };
var pineapple = { name: "pineapple", price: 20 };
var mushom = { name: "mushom", price: 40 };
var watermelon = { name: "watermelon", price: 50 };
var cheese = { name: "cheeese", price: 60 };
var salami = { name: "salami", price: 100 };
var small = { name: "small", price: 200 };
var medium = { name: "medium", price: 250 };
var large = { name: "large", price: 250 };
var delevery = {name= "delevery", price=25}

//CREATE OBJECT FUNCTION

  function Size(small,medium,large) {
    this.small= small;
    this.medium= medium;
    this.large= large;
  }

function topping(egg,bacon,pineapple,mushom,watermelon,cheese,salami) {
    this.egg = egg;
    this.bacon = bacon;
    this.pineapple = pineapple;
    this.mushom = mushom;
    this.watermelon = watermelon;


}

// user interface logic
$(document).ready(function() {
    $("form#new-order").submit(function(event) {
      event.preventDefault();
  
  var inputsizing = $("input#new-first-name").val();
      var inputtedLastName = $("input#new-last-name").val();
  
       var selectsize = $("select#sizing").val();
       var choosecrust=$( "input[type=radio][name=crust]:checked" ).val();
       var selecttopping = $("select#toppingtop").val();
       var selectdelevery=
     
  });
  });
