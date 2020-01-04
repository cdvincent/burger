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
            })
        });
        
        $("#submit").on("click", function(event) {

            event.preventDefault();
            
            var newBurger = {
                burger_name: $("#burger").val().trim(),
                devoured: 0
            };

            if (newBurger.burger_name === "") {

                return false;
            } else {
            
            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            }).then(
                function() {
                    console.log("created new burger");
                    location.reload();
                });
            }
            });
            
        });