


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


//var currentTime = moment().get('hour')


//})
//for (var i = 0; i<= 8; i++){
   // if $()
   // $("#"+currentHour).addClass(".present");
   // console.log("#"+currentHour)
//}