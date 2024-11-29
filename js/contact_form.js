// function sendMail() {
//     var params = {
//         name:document.getElementById("name").value,
//         email:document.getElementById("email").value,
//         phone_number:document.getElementById("phone").value,
//         message:document.getElementById("message").value
//     };

//     const serviceId = "service_t7uqjt6";
//     const templateId = "template_39xvmhe";

//     emailjs.send(serviceId, templateId, params)
//     .then(
//         res => {
//             document.getElementById("name").value = "";
//             document.getElementById("email").value = "";
//             document.getElementById("name").value = ""
//             document.getElementById("phone").value = "";
//             document.getElementById("message").value = "";
//             console.log(res);
//             alert("Your message was sent successfully")
//         }
//     )
//     .catch(err=>console.log(err))
// }



    window.onload = function () {
        const contactForm = document.getElementById('contact-form');
        
        if (contactForm) {
            contactForm.addEventListener('submit', function (event) {
                event.preventDefault();

                // Display a loading indicator to the user
                const submitButton = contactForm.querySelector('button[type="submit"]');
                const originalButtonText = submitButton.innerText;
                submitButton.disabled = true;
                submitButton.innerText = 'Sending...';

                // Use EmailJS to send the form
                emailjs.sendForm('service_t7uqjt6', 'template_39xvmhe', this)
                    .then(() => {
                        alert("Your message was sent successfully. Thank you!");
                    })
                    .catch((error) => {
                        console.error('Message sending failed:', error);
                        alert("Oops! Something went wrong. Please try again later.");
                    })
                    .finally(() => {
                        // Restore the button to its original state
                        submitButton.disabled = false;
                        submitButton.innerText = originalButtonText;
                    });
            });
        } else {
            console.error("Contact form not found. Ensure the form's ID is correct.");
        }
    };

