
function toastmsg(status) {
    var x = document.getElementById("snackbar");
    if (status) {
        $('#snackbar').text("");
        $('#snackbar').text("Message sent successfully!!");
    } else {
        $('#snackbar').text("");
        $('#snackbar').text("Error occurred! Please try again.");
    }
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}
$('.submit-btn').click(function () {
    var name = $('#contact-name').val();
    var sub = $('#subject').val();
    var email = $('#email').val();
    var msg = $('#msg').val();
    toastmsg(false);
    $.ajax({
        url: "http://mywork.dev-tech.club/ravi_mail.php",
        data: { "template": "<html><body><div> <div><label>Name: </label>  " + name + "</div> <div><lable>Email: </lable> " + email + "</div> <div><label>Subject: </label>" + sub + "</div>    <div><label>Message: </label>" + msg + "</div></div></body></html>" },
        success: function(data){           
                toastmsg(data.status); 
        }
    })

});