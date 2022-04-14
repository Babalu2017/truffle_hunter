const form2 = document.getElementById('my_form2');

form2.addEventListener('submit', function (event) {
    /* prevent the reload of the page. here i prevent the event. */
    event.preventDefault();


    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;


    /* Sending the email with the name and email */
    emailjs.sendForm("service_lhay6fq", "Francesco", '#my_form2', 'b166ofxC1GD8wWnmt', {
        "from_name": fullName,
        "from_email": email

    })
        .then(
            function (response) {
                const statusMsg = "Awesome! We'll get you updated!"
                console.log("SUCCESS", response.status);
                const msgUser = document.getElementById('messageUser');
                msgUser.textContent = statusMsg;
                msgUser.style.color = "green";
                setTimeout(function () {
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

    form2.reset();

})