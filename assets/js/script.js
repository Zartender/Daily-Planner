
console.log("Loading JS ");
var today = moment();
$("#today").text(today.format('MMMM Do YYYY, h:mm:ss a'));
console.log(today.format);


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