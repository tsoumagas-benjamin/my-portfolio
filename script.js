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

// Event listeners to perform the correct function when buttons are pressed
// or the page is loaded/refreshed
botDetails.addEventListener("click", loadBotDetails);
rpsDetails.addEventListener("click", loadRpsDetails);
converterDetails.addEventListener("click", loadConverterDetails);

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