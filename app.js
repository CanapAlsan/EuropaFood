
document.addEventListener("DOMContentLoaded", function () {
    const contactform = document.getElementById("contactform");

    contactform.addEventListener("submit", function (e) {
        e.preventDefault();

        const nom = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("Message").value;
        const telephone = document.getElementById("tel").value;
        console.log("Numéro de téléphone : " + telephone);


        const mailTo = "mailto:PULUR12@GMAIL.COM";
        const subject = encodeURIComponent("Nouveau message de " + nom);
        const body = encodeURIComponent("name : " + nom + "\ne-mail : " + email + "\nMessage : " + message + "\ntel :" + telephone);

        const mailLink = `${mailTo}?subject=${subject}&body=${body}`;

        window.location.href = mailLink;

        alert("Le message a été envoyé avec succès !");

        
            });
        });

