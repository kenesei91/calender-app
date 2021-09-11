const currentDay = document.getElementById("currentDay");

// Get current Date
const today = new Date();

// Change date to desired format using moment.js
const todayDate = moment(today).format("dddd, MMMM Do"); // to include time include h:mm:ss a
$("#currentDay").html(todayDate);
 //currentDay.textContent = todayDate;

$(document).ready(function(){
    // saveBtn click eventlistener
    $(".saveBtn").on("click", function(){
        // obtain values of the description
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // save text in local storage 
        localStorage.setItem(time, text);
        
    })

    function timeTracker(){
        // obtaine the current time in "hours"
        var timeNow = moment().hour();
        console.log(timeNow);
        
        // loops over class of time-blocks
        $(".time-block").each(function(){
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);
            // split() puts hour8 in to ["hour8"]
            // split(hour) turns ["hour8"] in to ["", "8"]
            // split(hour)[1] turns ["hour8"] in to 8
            console.log(blockTime);

            // compare the times and add the necessary classes for background indicators
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    // get item from local storage
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));
    $("#hour18 .description").val(localStorage.getItem("hour18"));
    $("#hour19 .description").val(localStorage.getItem("hour19"));
    

    timeTracker();
      
})


































/*let dt = today.getDate();
let dd = today.getDay(); 
let mm = today.getMonth(); 
let yyyy = today.getFullYear(); 

const now = `${dd}/${mm}/${dt}`;*/
