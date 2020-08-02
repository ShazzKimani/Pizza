$(document).ready(function() {
  $("form#pizzaMenu").submit(function(event) {
    var size, crust, toppings, count;
    size = $("#pizzaSize :selected");
    crust = $("#pizzaCrust :selected");
    toppings = $("#pizzaToppings :checked");

    count = parseInt($("#pizzaCount").val());

    var pizzaOrder = new PizzaOrder(size, crust, toppings, count);
    addToCart(pizzaOrder);

    event.preventDefault();
  });