


//Date in jumbotron
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

//Moving colours of scheduler to reflect current time

var currentHour = moment().hour();
console.log(currentHour);

for (var i = 0; i<= 8; i++){
    $("#"+currentHour).addClass(".present");
    console.log("#"+currentHour)
}