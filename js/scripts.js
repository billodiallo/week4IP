$(document).ready(function(){
    $("#addtopping").click(function(event) {
      event.preventDefault();
      $(".Toppings").append(
        "<label>Select Your favourite Toppings</label>" +
          '<select class="custom-select custom-select-md mb-3" id="toppings1" required="">' +
          '<option value="tomato">Tomato @ sh. 80</option>' +
          '<option value="onions">Onions @ sh. 80</option>' +
          '<option value="mushroom">Mushroom @ sh. 80</option>' +
          '<option value="greenpepper">Green Pepper @ sh. 80</option>' +
          '<option value=""></option>' +
          '<option value="olives">Olives @ sh. 120</option>' +
          '<option value="pineapple">Pineapple @ sh. 120</option>' +
          '<option value="sweetcorn">Sweet Corn @ sh. 120</option>' +
          '<option value="macon">Macon @ sh. 120</option>' +
          '<option value="mince">Mince @ sh. 120</option>' +
          '<option value=""></option>' +
          '<option value%"beef">Beef Peperoni @ sh. 170</option>' +
          '<option value="chicken">Periperi Chicken @ sh. 170</option>' +
          "</select>"
      );
    });

    $("#checkout").click(function(event){
        event.preventDefault();
        var flavour = $("#flavour option:selected").val();
        var size = parseInt($("#size option:selected").val());
        var crust = parseInt($("#crust option:selected").val());
        var toppings = parseInt($("#toppings option:selected").val());
        var toppings1 = parseInt($("#toppings1 option:selected").val());
        var number = parseInt($("#number").val());
  
        
        