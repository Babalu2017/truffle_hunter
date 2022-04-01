
let submitButton = document.getElementById('submitBtn');

submitButton.addEventListener('click', function (event) {

    //prevent the reload of the page. here i prevent the event.
    event.preventDefault();


    let firstName = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let number = document.getElementById('telphone_number').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

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
                console.log("SUCCESS", response);

            },
            function (error) {
                console.log("FAILED", error);

            }

        );
        const form = document.getElementById('my_form');
      form.reset();
    
})