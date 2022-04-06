const form = document.getElementById('my_form');

    form.addEventListener('submit', function (event) {
    //prevent the reload of the page. here i prevent the event.
    event.preventDefault();


    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    

    //Sending the email with the name and email
    emailjs.sendForm("service_lhay6fq", "Francesco", '#my_form', 'b166ofxC1GD8wWnmt', {
        "from_name": fullName,
        "from_email": email,
        "from_message": message,

    })
        .then(
            function (response) {
                const statusMsg = "Thank you! We'll update our map."
                console.log("SUCCESS", response.status);
                const msgUser = document.getElementById('messageUser');
                msgUser.textContent = statusMsg;
                msgUser.style.color = "green";
                setTimeout(function(){
                    if ($('#messageUser').length > 0) {
                      $('#messageUser').remove();
                      location.reload()
                    }
                  }, 3000);        
            },
            function (error) {
                console.log("FAILED", error);

            }

        );
        
    form.reset();

})