$(function() {
    $(".change-devoured").on("click", function(event) {
        event.preventDefault();
        var id = $(this).data("id");
        var isDevoured = {
            devoured: 1
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: isDevoured
        }).then(
            function() {
                console.log("burger devoured", isDevoured);
                location.reload();
            });
        });
        
        $(".create-form").on("submit", function(event) {

            event.preventDefault();
            
            var newBurger = {
                burger_name: $("#burger").val().trim(),
                devoured: 0
            };
            
            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            }).then(
                function() {
                    console.log("created new burger");
                    location.reload();
                });
            });
            
        });