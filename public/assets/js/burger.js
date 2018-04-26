$(function () {
    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        console.log("save burger clicked");

        console.log($("#burgerName").val());

        var newBurger = {
            burger_name: $("#burgerName").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function(){
            console.log("Created a new Burger");           
            location.reload();
        });
    });

    $(".devour-it").on("click", function(event){
        console.log("inside Devour-it click");

        var id = $(this).data("id");
        var customer_name = $("#customer_name").val().trim();
        var newDevoured = {devoured: 1,name: customer_name};
        console.log(customer_name);
        $.ajax("api/burgers/" +id, {
            type:"PUT",
            data: newDevoured
        }).then(function(){
            console.log("changed devoured to: ", newDevoured.devoured);
            location.reload();
        });
    });
});