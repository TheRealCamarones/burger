$(function() {
    $(".change-eaten").on("click", function(event) {
        var id = $(this).data("id");
        var newEaten = $(this).data("devoured");

        var newEatenState = {
            devoured: newEaten
        };

        // then use the API to send the updated devoured state
        $.ajax("/api/burgers/" + id, {
            type: "POST",
            data: newEatenState
        }).then(
            function() {
                console.log("changed eaten to", newEaten);
                // reload the page to update the list
                window.location.reload();
            }
        );
        
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burg").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger");
                location.reload();
            }
        );
    });
});