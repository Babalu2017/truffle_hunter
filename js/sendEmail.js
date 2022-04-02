const form = document.getElementById('my_form');

    form.addEventListener('submit', function (event) {
    //prevent the reload of the page. here i prevent the event.
    event.preventDefault();


    const firstName = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const number = document.getElementById('telphone_number').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    

    //Sending the email with the name and email
    emailjs.send("service_lhay6fq", "Francesco", {
        "from_name": firstName,
        "from_surname": surname,
        "from_email": email,
        "from_number": number,
        "from_message": message

    })
        .then(
            function (response) {
                const statusMsg = "Awesome! We got your message!"
                console.log("SUCCESS", response.status);
                const msgUser = document.getElementById('messageUser');
                msgUser.textContent = statusMsg;
                msgUser.style.color = "green";
                setTimeout(function(){
                    if ($('#messageUser').length > 0) {
                      $('#messageUser').remove();
                      location.reload()
                    }
                  }, 5000);        
            },
            function (error) {
                console.log("FAILED", error);

            }

        );
    
    form.reset();

})
