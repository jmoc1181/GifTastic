
//var//buttons that will be automatically here 
var spaceTerms = ["Moon", "Sun", "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Solar Flare", "Asteroid"];


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


        for (var i = 0; i < results.length; i++) { 

        // Saving the image_original_url property
        var imageUrl = results[i].images.fixed_height.url;

        // Creating and storing an image tag
        var spaceImage = $("<img>");

        // Setting the catImage src attribute to imageUrl
        spaceImage.attr("src", imageUrl);
        spaceImage.attr("alt", "space image");

        // Prepending the catImage to the images div
        $("#space-gif").append(spaceImage);
      }});
    };
      



      // Function for displaying movie data
      function renderButtons() {

        // Deletes the movies prior to adding new movies
        // (this is necessary otherwise you will have repeat buttons)
        $("#buttons-view").empty();
        // Loops through the array of movies
        for (var i = 0; i < spaceTerms.length; i++) {

          // Then dynamicaly generates buttons for each movie in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var a = $("<button>");
          // Adds a class of movie to our button
          a.addClass("space");
          // Added a data-attribute
          a.attr("data-name", spaceTerms[i]);
          // Provided the initial button text
          a.text(spaceTerms[i]);
          // Added the button to the buttons-view div
          $("#buttons-view").append(a);
        }
      }


            // This function handles events where a movie button is clicked
      $("#add-space").on("click", function(event) {
        event.preventDefault();
        // This line grabs the input from the textbox
        var spaceSearch = $("#space-input").val().trim();

        // Adding movie from the textbox to our array
        spaceTerms.push(spaceSearch);

        // Calling renderButtons which handles the processing of our movie array
        renderButtons();
      });

      // Adding a click event listener to all elements with a class of "movie"
      $(document).on("click", ".movie", space);

      // Calling the renderButtons function to display the intial buttons
      renderButtons();


