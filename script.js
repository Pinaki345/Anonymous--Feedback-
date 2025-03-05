document.getElementById("submitBtn").addEventListener("click", function() {
    let feedback = document.getElementById("feedback").value;
    
    if (feedback.trim() === "") {
        alert("Please enter feedback before submitting.");
        return;
    }

    // Send feedback to Firebase (We’ll set this up next)
    console.log("Feedback submitted:", feedback);
    document.getElementById("message").innerText = "Feedback submitted anonymously!";
    document.getElementById("feedback").value = ""; // Clear input
});
