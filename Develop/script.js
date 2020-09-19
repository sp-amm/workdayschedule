
$(document).ready(function(){

//Date in jumbotron
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

//Moving colours of scheduler to reflect current time

var currentHour = moment().hour();
console.log(currentHour);


function pastPresentColours(){
   
    $('table > tbody > tr').each(function(){
        var plannerHour = $(this).attr("id");
        console.log(plannerHour);
        

    if (plannerHour == currentHour){
           $(this).addClass("present");
        }
            else if ( plannerHour > currentHour){
                $(this).addClass("future");
            }
                else {$(this).addClass("past");
                }
    });
};

pastPresentColours()

//Saving calendar entries into local storage

//console log to find the data
$("button").on("click", function(event){console.log($(event.target).closest('tr').find('input').val())});

$("button").on("click", function(event){console.log($(event.target).closest('tr').attr("id"))});

//puts the scheduler data into the local storage
$("button").on("click", function(event){
    localStorage.setItem($(event.target).closest('tr').attr("id"), $(event.target).closest('tr').find('input').val())});

//Getting the values from local storage to ensure they are displayed after refresh
 $('table > tbody > tr').each(function(){
    var task = localStorage.getItem($(this).attr("id")); 
    console.log(task); 
    $(this).find('input').text(task);
 })   
   

//function to clear the local storage when the day ends after midnight
//if(currentHour > 01 && currentHour > 08){
  //  localStorage.clear()};

});

