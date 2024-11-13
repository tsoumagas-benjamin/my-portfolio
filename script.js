// Use DOM manipulation to select project buttons
const botDetails = document.getElementById("bot-details");
const rpsDetails = document.getElementById("rps-details");
const converterDetails = document.getElementById("converter-details");

// Use DOM manipulation to select project description boxes and project descriptions
const botProjectDetails = document.getElementById("bot-project-details");
const rpsProjectDetails = document.getElementById("rps-project-details");
const converterProjectDetails = document.getElementById("converter-project-details");
const botDescription = document.getElementById("bot-description");
const rpsDescription = document.getElementById("rps-description");
const converterDescription = document.getElementById("converter-description");

// Use DOM manipulation to select the contact form and form elements
const contactName = document.getElementById("name");
const mail = document.getElementById("mail");
const message = document.getElementById("message");
const form = document.getElementById("form");
const submit = document.getElementById("submit");

// Event listeners to perform the correct function when buttons are pressed
botDetails.addEventListener("click", loadBotDetails);
rpsDetails.addEventListener("click", loadRpsDetails);
converterDetails.addEventListener("click", loadConverterDetails);
submit.addEventListener("click", submitForm);

// Function to handle when details for the bot project button is clicked
function loadBotDetails() {
    if (botDetails.innerHTML === "Project Details") {
        botDetails.innerHTML = "Hide Details";
        botDescription.style.visibility = 'visible';
    } else {
        botDetails.innerHTML = "Project Details";
        botDescription.style.visibility = 'collapse';
    }
}

// Function to handle when details for the RPS project button is clicked
function loadRpsDetails() {
    if (rpsDetails.innerHTML === "Project Details") {
        rpsDetails.innerHTML = "Hide Details";
        rpsDescription.style.visibility = 'visible';
    } else {
        rpsDetails.innerHTML = "Project Details";
        rpsDescription.style.visibility = 'collapse';
    }
}

// Function to handle when details for the converter project button is clicked
function loadConverterDetails() {
    if (converterDetails.innerHTML === "Project Details") {
        converterDetails.innerHTML = "Hide Details";
        converterDescription.style.visibility = 'visible';
    } else {
        converterDetails.innerHTML = "Project Details";
        converterDescription.style.visibility = 'collapse';
    }
}

// Function to handle contact form submissions
function submitForm() {
    // Prevent submission/continuing of the form if name field is empty
    if (contactName.value == "" || contactName.value == null){
        contactName.setCustomValidity("Please enter your name.")
    } else {
        contactName.setCustomValidity("");
    }
    // Prevent submission/continuing of the form if email field is empty
    if (mail.validity.typeMismatch) {
        mail.setCustomValidity("Please enter a valid email address.");
    } else {
        mail.setCustomValidity("");
    }
    // Prevent submission/continuing of the form if message field is empty
    if (message.value == ""){
        message.setCustomValidity("Please enter a message.");
    } else {
        message.setCustomValidity("");
    }
}