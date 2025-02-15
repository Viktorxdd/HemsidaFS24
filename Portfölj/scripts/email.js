function sendMail(event){
    event.preventDefault();
    const contactData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value  
    };
    
    emailjs.send("service_mgrcm08", "template_zkfqyh8", contactData).then(() => {
        alert("Email Sent!");
        document.querySelector("form").reset();
    })
    .catch(error =>{
        console.error(`Error: ${error}`);
        alert("Failed to send email.");
    })
};

