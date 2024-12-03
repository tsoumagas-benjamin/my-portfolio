// Use DOM manipulation to select project buttons
const botDetails = document.getElementById("bot");
const rpsDetails = document.getElementById("rps");
const converterDetails = document.getElementById("converter");
const gamesDetails = document.getElementById("games");
const utilityDetails = document.getElementById("utility");
const plannerDetails = document.getElementById("planner");

// Use DOM manipulation to select project description boxes and project descriptions
const botProjectDetails = document.getElementById("bot-project-details");
const rpsProjectDetails = document.getElementById("rps-project-details");
const converterProjectDetails = document.getElementById("converter-project-details");
const gamesProjectDetails = document.getElementById("games-project-details");
const utilityProjectDetails = document.getElementById("utility-project-details");
const plannerProjectDetails = document.getElementById("planner-project-details");

const botDescription = document.getElementById("bot-description");
const rpsDescription = document.getElementById("rps-description");
const converterDescription = document.getElementById("converter-description");
const gamesDescription = document.getElementById("games-description");
const utilityDescription = document.getElementById("utility-description");
const plannerDescription = document.getElementById("planner-description");

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
gamesDetails.addEventListener("click", loadGamesDetails);
utilityDetails.addEventListener("click", loadUtilityDetails);
plannerDetails.addEventListener("click", loadPlannerDetails);
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

// Function to handle when details for the games project button is clicked
function loadGamesDetails() {
    if (gamesDetails.innerHTML === "Project Details") {
        gamesDetails.innerHTML = "Hide Details";
        gamesDescription.style.visibility = 'visible';
    } else {
        gamesDetails.innerHTML = "Project Details";
        gamesDescription.style.visibility = 'collapse';
    }
}

// Function to handle when details for the utility project button is clicked
function loadUtilityDetails() {
    if (utilityDetails.innerHTML === "Project Details") {
        utilityDetails.innerHTML = "Hide Details";
        utilityDescription.style.visibility = 'visible';
    } else {
        utilityDetails.innerHTML = "Project Details";
        utilityDescription.style.visibility = 'collapse';
    }
}

// Function to handle when details for the planner project button is clicked
function loadPlannerDetails() {
    if (plannerDetails.innerHTML === "Project Details") {
        plannerDetails.innerHTML = "Hide Details";
        plannerDescription.style.visibility = 'visible';
    } else {
        plannerDetails.innerHTML = "Project Details";
        plannerDescription.style.visibility = 'collapse';
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

// Animated text for the About Me section using Typed.js by Matt Boldt
var typed = new Typed('#element', {
    strings: ["I'm a Computer Science graduate from Ontario Tech University and continuing my education with the Computer Programming and Analysis program at Humber Polytechnics. I enjoy problem-solving and automating tasks to save time. I've worked with Python, C++, Java, JavaScript, HTML, CSS, and SQL on a variety of projects, though I enjoy Python the most."],
    typeSpeed: 10,
  });