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
        var devoured = {devoured: 1};

        $.ajax("api/burgers/" +id, {
            type:"PUT",
            data: devoured
        }).then(function(){
            console.log("changed devoured to: ", devoured.devoured);
            location.reload();
        });
    });
});