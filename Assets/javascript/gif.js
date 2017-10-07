// hit submit create button with value of input

$(document).ready(function(){
  //listener when submit button is clicked
    $("#submitgif").on("click", function(event){
      event.preventDefault()
      console.log("clicked submit");
      //create variable to store the input in textbox with ID=typegif
      var GifSearch = $("#searchgif").val();
      console.log(GifSearch);
      //create a new var that will hopefully create a new button element
      var button = $("<button>")
      //gave the button an ID and Value of w/e the user typed in
      button.attr("id", GifSearch);
      //commented out the line below bc it didnt work but im unsure why
      //$("button").attr("value", GifSearch);
      //console.log(button.id);
      button.text(GifSearch);
      //attached the button to the buttons HTML section
      $("#buttons").append(button);

    })


//when button is pressed pull API and display it

//select button by ID
$("#GifSearch").on("click", function(){
      var urlQuery = "https://api.giphy.com/v1/gifs/search?q=" +
        GifSearch + "&api_key=dc6zaTOxFJmzC&limit=10";

       $.ajax({
          url: urlQuery,
         method: "GET"
         })
      .done(function(response) {
        var results = response.data;
        console.log(results);

})


})
})
