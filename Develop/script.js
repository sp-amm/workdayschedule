
$(document).ready(function(){

//Date in jumbotron
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

//Moving colours of scheduler to reflect current time

var currentHour = moment().hour();
//var currentHour = 12;
console.log(currentHour);


function pastPresentColours(){
   
 //Parent child selector info for the jquery loop from Fabrizio Calderan at https://stackoverflow.com/questions/10431987/jquery-each-loop-in-table-row https://api.jquery.com/child-selector/
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


//puts the scheduler data into the local storage
$("button").on("click", function(event){
    localStorage.setItem($(event.target).closest('tr').attr("id"), $(event.target).closest('tr').find('input').val())});


//Function for diplaying the local stoarge data (saved scheduler tasks) after refresh
function showTasks(){ 

    $('table > tbody > tr').each(function(){
        var task = localStorage.getItem($(this).attr("id")); 
        console.log(task); 
        $(this).find('input').val(task);
    });   
};

showTasks();

//function to clear the local storage when the day ends after midnight
if(currentHour === 12){
   localStorage.clear()
   showTasks();
};


});

