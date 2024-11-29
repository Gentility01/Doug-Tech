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

            // Validate form inputs
            const nameField = contactForm.querySelector('#name');
            const emailField = contactForm.querySelector('#email');
            const phoneField = contactForm.querySelector('#phone');
            const messageField = contactForm.querySelector('#message');

            const name = nameField.value.trim();
            const email = emailField.value.trim();
            const phone = phoneField.value.trim();
            const message = messageField.value.trim();

            let isValid = true;

            // Validate each field
            if (!name) {
                alert("Please enter your name.");
                nameField.focus();
                isValid = false;
            } else if (!email) {
                alert("Please enter your email address.");
                emailField.focus();
                isValid = false;
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                alert("Please enter a valid email address.");
                emailField.focus();
                isValid = false;
            } else if (!phone) {
                alert("Please enter your phone number.");
                phoneField.focus();
                isValid = false;
            } else if (!message) {
                alert("Please enter your message.");
                messageField.focus();
                isValid = false;
            }

            if (!isValid) {
                return; // Stop form submission if any field is invalid
            }

            // Display a loading indicator
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.innerText;
            submitButton.disabled = true;
            submitButton.innerText = 'Sending...';

            // Use EmailJS to send the form
            emailjs.sendForm('service_t7uqjt6', 'template_39xvmhe', this)
                .then(() => {
                    alert("Your message was sent successfully. Thank you!");
                    contactForm.reset(); // Clear the form after successful submission
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


