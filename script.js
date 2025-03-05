document.addEventListener("DOMContentLoaded", function () {
    const submitBtn = document.getElementById("submitBtn");
    const feedbackInput = document.getElementById("feedback");
    const message = document.getElementById("message");
    const feedbackLink = document.getElementById("feedbackLink");

    submitBtn.addEventListener("click", async function() {
        let feedback = feedbackInput.value.trim();

        if (feedback === "") {
            alert("Please enter feedback before submitting.");
            return;
        }

        try {
            // Store feedback in Firestore (Error 3 will be checked later)
            await db.collection("feedbacks").add({
                text: feedback,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            });

            // Show thank you message and reset input
            message.style.display = "block";
            feedbackInput.value = "";
            feedbackLink.style.display = "block";

        } catch (error) {
            console.error("Error submitting feedback:", error);
            alert("Error submitting feedback. Try again!");
        }
    });
});
