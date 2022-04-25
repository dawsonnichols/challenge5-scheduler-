// get current day using Jquery/moment.js tools (check docs)
var timeSheetDisplay = document.getElementById("timeSheet");

const timeText = document.getElementById("currentDay");
var textEl = document.querySelector(".description"); 
var currentTime = moment();

timeText.innerHTML = currentTime.format("dddd, MMMM Do YYYY, LTS (L)");
$(document).ready(function () {
//  Set up local storage
var storageLocker = []; 
$(".saveBtn").on("click", function()  {
    // in this case the "this" selects all of the text area elements in the html
    let text = $(this).siblings(".description").val(); 
    // makes sure the button clicked is appended to each row. there are 9 rows of buttons and each save icon must only save for its own row. 
    let hour = $(this).parent().attr("id"); 
// set item gets set to be called with getItem 
    localStorage.setItem(hour, text); 
    console.log(localStorage); 
})
// get gets the saved text by individual id from local storage, which was saved in the localStorage.setItem(hour, text); 

$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10")); 
$("#hour-11 .description").val(localStorage.getItem("hour-11")); 
$("#hour-12 .description").val(localStorage.getItem("hour-12")); 
$("#hour-1 .description").val(localStorage.getItem("hour-1")); 
$("#hour-2 .description").val(localStorage.getItem("hour-2")); 
$("#hour-3 .description").val(localStorage.getItem("hour-3")); 
$("#hour-4 .description").val(localStorage.getItem("hour-4")); 
$("#hour-5 .description").val(localStorage.getItem("hour-5"));  



var checkTime = functon () {
    var :variable = moment().hour(); 
    for (var i = 0; i < textEl.length; i++) {

    if (textEl[i].id < present) {
        textEl[i].classList.add("past");

    } else if (textEl[i].id > present) {
        textEl[i].classList.add("future");
    } else {
        textEl[i].classList.add("present");
    }
}
});
checkTheTime(); 