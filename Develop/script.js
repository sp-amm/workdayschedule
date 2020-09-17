


//Date in jumbotron
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

//Moving colours of scheduler to reflect current time

var currentHour = moment().hour();
console.log(currentHour);
console.log(this);
var plannerHour = $('table > tbody > tr').attr("id");
console.log(plannerHour);

function pastPresentColours(){
   
    $('table > tbody > tr').each(function(){
        
     var plannerHour = $(this).attr("id");
       console.log(plannerHour); 

       if (plannerHour == currentHour){
           $(this).addClass("present")}
         else if ( plannerHour > currentHour){
            $(this.addClass("past"))}
            else {$(this.addClass("future"))}
    })
};


//var currentTime = moment().get('hour')


//})
//for (var i = 0; i<= 8; i++){
   // if $()
   // $("#"+currentHour).addClass(".present");
   // console.log("#"+currentHour)
//}