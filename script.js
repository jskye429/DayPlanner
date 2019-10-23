// moment stuffs 
$(document).ready(function() {
    var hourNow = moment().format('MMMM Do YYYY, h:mm:ss a')
    $('.currentMoment').text(hourNow)
    var currentHour = moment().format('H')
    // var currentHour = 12;
        console.log(currentHour)

$(".form-control").each(function(){
        var someHour = $(this).attr("data-hour")
        console.log($(this).data("hour"))
        someHour = parseInt(someHour);
        //+someHour
        
        if(someHour === currentHour){
          $(this).css("background-color","purple")
            $(this).addClass()
            console.log("made a match")
            };
        
            $("button").click(function(){
           var task = $("#comment").val()
                // var noteForMessage = val
            $("#comment").val(task)
            localStorage.setItem("task 9:00",task)
            var something = localStorage.getItem("task 9:00")
            console.log("localStorage" + something)
       });

    });

});

// add local storage bit on startup of page 


