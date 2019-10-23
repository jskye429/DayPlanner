// moment stuffs 
$(document).ready(function() {
    var hourNow = moment().format('MMMM Do YYYY, h:mm:ss a')
    $('.currentMoment').text(hourNow)
    var currentHour = moment().format('H')
        console.log(currentHour)

$(".form-control").each(function(){
        var someHour = $(this).attr("data-hour")
        console.log($(this).data("hour"))
        someHour = parseInt(someHour);
        //+someHour
        
        if(someHour === currentHour){
          $(this).css("backgroundColor","purple")
            $(this).addClass()
            console.log("made a match")
            }else if(1===1){
                
   };
        $("button").click(function(){
           var task = $("#comment").val()
                var noteForMessage = val
            $("#comment").val(noteForMessage)
            localStorage.setItem("task 9:00",task)
            var something = localStorage.getItem("task 9:00")
       });

    });

});
