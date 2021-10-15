// Displays time in appropriate format.
console.log("Loading JS ");
var today = moment();
$("#today").text(today.format('MMMM Do YYYY, h:mm a'));
console.log(today.format);

// Saves the element with .description class to local storage.
$('.saveBtn').on('click', function () {
    console.log('.saveBtn', $(this));
    var description = $(this).siblings('.description').val();
    console.log(description);
    var time = $(this).siblings('.hour').text();
    console.log(time);
    //TO set 
    localStorage.setItem(time, description);



})

// localStorage.getItem(key); to get.

//.each loop 
$(".row").each(function (index) {
    console.log(index + ": ");

    var time = $(this).find('.hour').text();
    //grab value from LS 
    var savedvalue = localStorage.getItem(time);
    console.log(savedvalue);
    //retains information in the textarea of the HTML page 
    $(this).find('.description').val(savedvalue);

});

// console.log(moment().hours());



// if(weekNum % 2) {
//     takeOut = true;
//   } else {
//     takeOut = false;
//   }
  
//   $("#4a").text(takeOut + ", because it's currently week " + weekNum);