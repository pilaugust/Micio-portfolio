function navigateTo(url) {
    window.location.href = url;
}

function navigateTo(divId) {
  const targetDiv = document.getElementById(divId);
  if (targetDiv) {
    targetDiv.scrollIntoView({ behavior: 'smooth' });
  }
}

// Get modal and elements
const modal = document.getElementById("age-verification-modal");
const form = document.getElementById("age-verification-form");
const birthdateInput = document.getElementById("birthdate");
const termsCheckbox = document.getElementById("terms");
const errorMessage = document.getElementById("error-message");
const mainContent = document.getElementById("mainContent");

// Function to calculate age
function calculateAge(birthdate) {
    const birthDateObj = new Date(birthdate);
    const today = new Date();
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();
    if (month < birthDateObj.getMonth() || (month === birthDateObj.getMonth() && day < birthDateObj.getDate())) {
        age--;
    }
    return age;
}

// Form submission handler
form.addEventListener("submit", function (e) {
    e.preventDefault();  // Prevent the form from submitting and reloading the page

    // Get the user's birthdate and check if they agree to the terms
    const birthdate = birthdateInput.value;
    const userAge = calculateAge(birthdate);
    
    console.log("User Age: ", userAge); // Debugging line
    console.log("Terms checked: ", termsCheckbox.checked); // Debugging line

    if (userAge >= 18 && termsCheckbox.checked) {
        console.log("Age verified and terms accepted.");

        // Hide the modal and show the main content
        modal.style.display = "none";  // This should hide the modal
        mainContent.style.display = "block";  // This should show the main content
    } else {
        // Show error if not 18 or terms not agreed
        errorMessage.style.display = "block";
    }
});

// Show the modal when the page loads
window.onload = function() {
    const modal = document.getElementById("age-verification-modal");
    modal.style.display = "flex";  // Make sure the modal is displayed
};


function openLink(url) {
    window.open(url, "_blank"); // Open the link in a new tab
}