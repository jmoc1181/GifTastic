
//var//buttons that will be automatically here 
var topics = ["Moon", "Sun", "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Solar Flare", "Asteroid"];


$(document).on("click", ".spaceSearch", space); 
 renderButtons();

        function space () {
        var spaceSearch = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + spaceSearch + "&api_key=dc6zaTOxFJmzC&limit=10";
        $.ajax({
        url: queryURL,
        method: "GET"
 })


// Creates AJAX call for the specific space button being clicked
        .done(function(response) {
        console.log(queryURL);
        var results = response.data;

        $("#space-gif").empty();

                for (var i = 0; i < results.length; i++) { 
                var spaceDiv = $("<div class='gifs' >"); 
                var p = $("<p>").text("Rating: " + results[i].rating);

// Creating and storing an image tag
        var spaceImageStill = results[i].images.fixed_height_still.url;
        var spaceImageAnimate = results[i].images.fixed_height.url;
       
        var image = $("<img>").attr('src', spaceImageStill);

        image.attr('data-state', 'still'); 
        image.attr('data-still', spaceImageStill); 
        image.attr('data-animate', spaceImageAnimate);
        image.attr("alt", "space image");

        spaceDiv.prepend(image); 
        spaceDiv.prepend(p);
        $("#space-gif").prepend(spaceDiv);
}


      $(".gifs").on("click", 'img', function() {
// The attr jQuery method allows us to get or set the value of any attribute on our HTML element
      var state = $(this).attr("data-state");

      console.log(state);
// If the clicked image's state is still, update its src attribute to what its data-animate value is.
// Then, set the image's data-state to animate
 // Else set src to the data-still value
          if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
            console.log($(this));
          } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
            console.log($(this));
        };
    });
})}
      

// Function for displaying space buttons
        function renderButtons() {
// Deletes the space prior to adding new space
// (this is necessary otherwise you will have repeat buttons)
        $("#buttons-view").empty();
        // Loops through the array of space
                for (var i = 0; i < topics.length; i++) {
                var a = $("<button>");
// Adds a class 
                a.addClass("spaceSearch");
// Added a data-attribute
                a.attr("data-name", topics[i]);
// Provided the initial button text
                a.text(topics[i]);
// Added the button to the buttons-view div
                $("#buttons-view").append(a);
    }
}



// This function handles events where you can add buttons 
      $("#add-space").on("click", function(event) {
        event.preventDefault();
// This line grabs the input from the textbox
        var spaceSearch = $("#space-input").val().trim();
// Adding space term from the textbox to our array
        topics.push(spaceSearch);
// Calling renderButtons which handles the processing of our space array
        renderButtons();
});




