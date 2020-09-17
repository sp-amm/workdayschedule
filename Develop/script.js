


//Date in jumbotron
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

//Moving colours of scheduler to reflect current time

var currentHour = moment().hour();
console.log(currentHour);
console.log(this);

$('table > tbody > tr').each(function(){
var plannerHour = $(this).attr("id");
console.log(plannerHour);
});


//function pastPresentColours(){
   
 //   $('table > tbody > tr').each(function(){
        
  //   var plannerHour = parseInt($(this).attr("id"));
   //    console.log(plannerHour); 
//
    //   if (plannerHour == 10){
    //       $('table > tbody > tr').addClass("present");
    //    }
    //     else if ( plannerHour > currentHour){
   //         $('table > tbody > tr').addClass("future");
    //    }
    //        else {$('table > tbody > tr').addClass("past");
     //   }
  //  })
//};


//var currentTime = moment().get('hour')


//})
//for (var i = 0; i<= 8; i++){
   // if $()
   // $("#"+currentHour).addClass(".present");
   // console.log("#"+currentHour)
//}