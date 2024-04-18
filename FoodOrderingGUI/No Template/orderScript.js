var userName = "";


function printUser() {
  userName = document.getElementById("userInput").value;
  var paragraph = document.getElementById("username");
  paragraph.innerHTML = userName;
}


var selectedCrust = ""; 

function printCrust() {
  var radios = document.getElementsByName('pizzaCrust');

  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      selectedCrust = radios[i].value;
      return;
    }
  }

}

var selectedSize = ""; 
var selectedToppings = []; 
var selectedSides = ""; 
var selectedDrinks = ""; 


function printSize() {
  var radios = document.getElementsByName('pizzaSize');

  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
   
      selectedSize = radios[i].value;
      return;
    }
  }


}



function printToppings() {
  var checkboxes = document.getElementsByName('toppings');
  selectedToppings = []; 

  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      selectedToppings.push(checkboxes[i].value);
    }
  }

}


function printSidesCombo() {
  var combo = document.getElementById('sidesCombo');
 selectedSides = combo.options[combo.selectedIndex].value; 
  
}


function printDrinksCombo() {
  var combo = document.getElementById('drinksCombo');
    selectedDrinks = combo.options[combo.selectedIndex].value;
  
 
}






function submitOrder() {
  
  var username = document.getElementById('userInput').value.trim(); 

  if (username === '') {
    username = 'Customer #' + Math.floor(Math.random() * 1000); 
  }

  var menuPrices = {
    'Small': 4,
    'Medium': 6,
    'Large': 8,
    'X-Large': 10
  };


  var sidePrices = {
    'Breadsticks': 4,
    'Breadstick Bites': 2,
    'Big Chocolate Chip Cookie': 4
  };


  var crustOutput = selectedCrust !== '' ? selectedCrust : 'Thin';
  var sizeOutput = selectedSize !== '' ? selectedSize : 'Small'; 
  var toppingsOutput = selectedToppings.length > 0 ? selectedToppings.join(', ') : 'No Toppings'; 
  var sidesOutput = selectedSides !== '' ? selectedSides : 'No Sides';
  var drinksOutput = selectedDrinks !== '' ? selectedDrinks : 'No Drinks'; 


  var totalCost = menuPrices[sizeOutput] || 0; 
  totalCost += sidePrices[sidesOutput] || 0; 
  totalCost += selectedDrinks.length; 

  if (toppingsOutput!="No Toppings") {
    toppingsOutput+= " toppings";
  }
  

  var result = confirm("Your order is a " + crustOutput + " Crust " + sizeOutput + " Pizza with "  + toppingsOutput + ". You want " + sidesOutput + " for a side and you want " + drinksOutput + " for a drink. This would make your price $" + totalCost + ".00. Is this OK?");

  if (result) {
    var url = 'printOrderPage.html?' +
    'username=' + encodeURIComponent(username) +
    '&size=' + encodeURIComponent(sizeOutput) +
    '&crust=' + encodeURIComponent(crustOutput) +
    '&toppings=' + encodeURIComponent(toppingsOutput) +
    '&sides=' + encodeURIComponent(sidesOutput) +
    '&drinks=' + encodeURIComponent(drinksOutput) +
    '&totalCost=' + totalCost;
    window.location.href = url;
  } 
  else {
    //do nothing
  }




}
