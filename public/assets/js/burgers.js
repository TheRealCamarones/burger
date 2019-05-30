$(function() {
    $(".change-eaten").on("click", function(event) {
        console.log("responding")
        var id = $(this).data("id");
        var newEaten = $(this).data("devoured");

        var newEatenState = {
            devoured: newEaten
        };
console.log(id)
        // then use the API to send the updated devoured state
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEatenState
        }).then(
            function(response) {
                console.log(response)
                console.log("changed eaten to", newEaten);
                // reload the page to update the list
                location.reload();
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