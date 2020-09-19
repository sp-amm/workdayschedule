
$(document).ready(function(){

//Date in jumbotron with setInterval to keep it updated in browser
setInterval(() => {
 $("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));   
}, 1000);


//Moving colours of scheduler to reflect current time
var currentHour = moment().hour();

function pastPresentColours(){
   
 //Parent child selector info for the jquery loop from Fabrizio Calderan at https://stackoverflow.com/questions/10431987/jquery-each-loop-in-table-row https://api.jquery.com/child-selector/
    $('table > tbody > tr').each(function(){
        var plannerHour = $(this).attr("id");
        

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


//puts the scheduler data into the local storage - JQuery Forum for info re using .closest and .find - from Kevin B at https://forum.jquery.com/topic/getting-the-value-of-an-input-using-closest
$("button").on("click", function(event){
    localStorage.setItem($(event.target).closest('tr').attr("id"), $(event.target).closest('tr').find('input').val())});


//Function for diplaying the local stoarge data (saved scheduler tasks) after refresh
function showTasks(){ 

    $('table > tbody > tr').each(function(){
        var task = localStorage.getItem($(this).attr("id"));  
        $(this).find('input').val(task);
    });   
};

showTasks();

//Clear button to clear all tasks from local storage if needed
$("#clear").on('click', function(){
   localStorage.clear()
   showTasks();
});


});

