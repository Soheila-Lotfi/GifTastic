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