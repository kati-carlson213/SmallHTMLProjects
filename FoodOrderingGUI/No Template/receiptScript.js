const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const username = urlParams.get('username');
const sizeOutput = urlParams.get('size');
const crustOutput = urlParams.get('crust');
const toppingsOutput = urlParams.get('toppings');
const sidesOutput = urlParams.get('sides');
const drinksOutput = urlParams.get('drinks');
const totalCostOutput = urlParams.get('totalCost');

document.getElementById('username').innerHTML = 'Thank you,   <font color="#660000">' + username + "!</font> Your order has been placed!";
document.getElementById('sizeOutput').innerHTML = '<b> Size of Your Pizza: </b>' + sizeOutput;
document.getElementById('crustOutput').innerHTML = '<b> Crust Type:</b> ' + crustOutput;
document.getElementById('toppingsOutput').innerHTML = '<b> Toppings:</b> ' + toppingsOutput;
document.getElementById('sidesOutput').innerHTML = '<b> Sides:</b> ' + sidesOutput;
document.getElementById('drinksOutput').innerHTML = '<b> Drinks:</b> ' + drinksOutput;
document.getElementById('totalCostOutput').innerHTML = '<b> Total:</b> $' + totalCostOutput + ".00";