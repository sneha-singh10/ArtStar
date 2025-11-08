// contact.js

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const popup = document.getElementById("successPopup");
    const closeBtn = document.getElementById("closePopup");

    // Listen for form submission
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form reload

        // Simulate message sending (Formspree integration)
        fetch(form.action, {
            method: "POST",
            body: new FormData(form),
            headers: { 'Accept': 'application/json' }
        })
        .then(response => {
            if (response.ok) {
                showPopup(); // Show success popup
                form.reset(); // Reset form fields
            } else {
                alert("Something went wrong. Please try again later!");
            }
        })
        .catch(error => {
            alert("Network error. Please check your connection!");
            console.error(error);
        });
    });

    // Show popup
    function showPopup() {
        popup.classList.add("show");
        setTimeout(() => {
            popup.classList.remove("show");
        }, 4000); // Auto-hide after 4 seconds
    }

    // Close button manually hides popup
    closeBtn.addEventListener("click", () => {
        popup.classList.remove("show");
    });
});
