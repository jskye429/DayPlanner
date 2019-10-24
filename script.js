// moment stuffs 
$(document).ready(function () {
  var hourNow = moment().format('MMMM Do YYYY, h:mm:ss a')
  $('.currentMoment').text(hourNow)
  var currentHour = moment().format('H')
  // var currentHour = 12;
  console.log(currentHour)

  var testStor = localStorage.getItem("task 9:00");
  console.log("Did we get it? " + testStor)
  $("#comment").val(testStor)

  var testStor2 = localStorage.getItem("task 10:00");
  console.log("Did we get it? " + testStor2)
  $("#comment").val(testStor2)

  var testStor3 = localStorage.getItem("task 11:00");
  console.log("Did we get it? " + testStor3)
  $("#comment").val(testStor3)

  var testStor4 = localStorage.getItem("task 12:00");
  console.log("Did we get it? " + testStor4)
  $("#comment").val(testStor4)

  var testStor5 = localStorage.getItem("task 13:00");
  console.log("Did we get it? " + testStor5)
  $("#comment").val(testStor5)

  var testStor6 = localStorage.getItem("task 14:00");
  console.log("Did we get it? " + testStor6)
  $("#comment").val(testStor6)

  var testStor7 = localStorage.getItem("task 15:00");
  console.log("Did we get it? " + testStor7)
  $("#comment").val(testStor7)

  var testStor8 = localStorage.getItem("task 16:00");
  console.log("Did we get it? " + testStor8)
  $("#comment").val(testStor8)

  var testStor9 = localStorage.getItem("task 17:00");
  console.log("Did we get it? " + testStor9)
  $("#comment").val(testStor9)




  // do this 9 times 

  $(".form-control").each(function () {
    var someHour = $(this).attr("data-hour")
    console.log($(this).data("hour"))
    someHour = parseInt(someHour);
    //+someHour

    if (someHour === currentHour) {
      $(this).css("background-color", "purple")
      $(this).addClass()
      console.log("made a match")
    };


    // changing color is just this for being past time 

    $("button").click(function () {
      var task = $("task 9:00").val()
      var noteForMessage = val
      $("#comment").val(task)
      localStorage.setItem("task 9:00", task)
      var something = localStorage.getItem("task 9:00")
      console.log("localStorage" + something)
    
    // use for loop to make this cleaner otherwise just copy paste 9 times 

    
    });

  });

});

// add local storage bit on startup of page 