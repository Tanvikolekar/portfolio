// const form = document.querySelector('form');
// const fullName = document.getElementById("name");
// const email = document.getElementById("email");
// const phone = document.getElementById("phone");
// // const subject = document.getElementById("subject");
// const message = document.getElementById("message");

// function SendEmail() {
//     const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> phone Number: ${phone.value}<br> Message: ${message.value}<br>`;
//     Email.send({
//         Host: "smtp.elasticemail.com",
//         Username: "kolekartanvi76@gmail.com",
//         Password: "A0958D9791A482B8621023DFFE1DD712B68A",
//         To: 'kolekartanvi76@gmail.com',
//         From: "kolekartanvi76@gmail.com",
//         Subject: subject.value,
//         Body: bodyMessage
//     }).then(
//         message => {
//             if (message == "OK") {
//                 Swal.fire({
//                     title: "success!",
//                     text: "Message sent successfully!",
//                     icon: "success"
//                 });
//             }

//         }
//     );
// }
// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     SendEmail();
// });
// Ensure to include the necessary libraries in your HTML for Email and Swal to work
// <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
// <script src="https://smtpjs.com/v3/smtp.js"></script>

const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function SendEmail() {
    const bodyMessage = `
        Full Name: ${fullName.value}<br>
        Email: ${email.value}<br>
        Phone Number: ${phone.value}<br>
        Message: ${message.value}<br>
    `;
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "kolekartanvi76@gmail.com", // Ensure to use environment variables or a secure method
        Password: "A0958D9791A482B8621023DFFE1DD712B68A", // Ensure to use environment variables or a secure method
        To: 'kolekartanvi76@gmail.com",
        From: "kolekartanvi76@gmail.com",
        Subject: subject.value,
        Body: bodyMessage
    }).then(
        response => {
            if (response == "OK") {
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully!",
                    icon: "success"
                });
            } else {
                throw new Error(response);
            }
        }
    ).catch(
        error => {
            Swal.fire({
                title: "Error!",
                text: "There was an error sending your message. Please try again later.",
                icon: "error"
            });
            console.error("Error sending email: ", error);
        }
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    SendEmail();
});
