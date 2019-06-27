var movies;

//initialize movies array with some animation movie's name
movies=["Toy story","Spider man","Coco", "Moana","Inside Out","Finding Dory","Brave","Tangled","Up","Despicable Me","Big Hero","Minions"];

//display buttons 
function displayButtons(){

    $("#buttons-view").empty();

    for (i=0;i<movies.length;i++){
    var newbBtn=$("<button>");                            // create buttons using jQuery
    newbBtn.attr("data-name", movies[i]);                 // creat data-name attribute for each button
    newbBtn.addClass("giphy btn btn-success ml-1 mt-2");  // add giphy class and bunch of bootstrap class to style the buttons
    newbBtn.text(movies[i]);
    $("#buttons-view").append(newbBtn);                    // display buttons on the page
    }

}
displayButtons();      //show buttons on the page when it loads 


// render buttons
// user can add more buttons to the page by providing the animation's name 
// and clicking the submit button

$("#add-movie").on("click", function(){

    event.preventDefault();                           // prevent submit button from submitting
    var userInput=$("#movie-input").val().trim();     // take the user input and store it in a variable
    movies.push(userInput);
    displayButtons();   

});

// show giphys when user clicks on the buttons

$(document).on("click",".giphy",displayGiphyInfo);

function displayGiphyInfo(){

$("#giphy-view").empty();
var movieName=$(this).attr("data-name");
var queryUrl="https://api.giphy.com/v1/gifs/search?q="+movieName+"&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

$.ajax({
    url:queryUrl,
    method:"GET"
}).then(function(response){
    console.log(queryUrl);
    var giphys=response.data;
});
}