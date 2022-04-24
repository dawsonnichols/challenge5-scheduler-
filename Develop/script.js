// get current day using Jquery/moment.js tools (check docs)
var timeSheetDisplay = document.getElementById("timeSheet");

const timeText = document.getElementById("currentDay");

var currentTime = moment();

timeText.innerHTML = currentTime.format("dddd, MMMM Do YYYY, LTS (L)");

var newDiv = document.createElement("div");
newDiv.setAttribute("class", "row");
var childDiv = document.createElement("div");
childDiv.setAttribute("class", "time-block");
var textArea = document.createElement("textarea");

var divButton = document.createElement("button");

timeSheetDisplay.appendChild(newDiv);

newDiv.appendChild(childDiv);
newDiv.appendChild(textArea);
newDiv.appendChild(divButton);

// Set up an array which has times (to dynamically create list elements using JSON) and an empty space for text entry

var timeArray = [
  { hour: "9 A.M.", text: "" },
  { hour: "10 A.M.", text: "" },
  { hour: "11 A.M.", text: "" },
  { hour: "12 P.M.", text: "" },
  { hour: "1 P.M.", text: "" },
  { hour: "2 P.M.", text: "" },
  { hour: "3 P.M.", text: "" },
  { hour: "4 P.M.", text: "" },
  { hour: "5 P.M.", text: "" },
];

// time|text display|save button
// create div, make each element .. div | text area | button/div
// visual rows

timeArray.forEach(function (timeArray, index) {
  var timeHour = timeArray.hour;
  var timeSlot =  timeHour + timeArray.text;
//   timeSheetDisplay.appendChild(newDiv);

//   newDiv.appendChild(childDiv);
//   childDiv.classList.add("hour col-2")
//   newDiv.classList.add("row")
//   childDiv.textContent = [i] + 9; 
//   newDiv.appendChild(textArea);
//   newDiv.appendChild(divButton);
  $('.list-group').append('<li>' + timeSlot + '</li>'); 
//   $(".timeBlock").append(timeSlot);
});

// add background colors to each time slot and make the slot colors respond ina  sensitive manner to current time of day

// set up local storage

// save text entries

// choose what will be put into local storage
