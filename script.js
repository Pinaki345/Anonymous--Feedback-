// Firebase Configuration (Replace with your actual config)
const firebaseConfig = {
    apiKey: "AIzaSyB1S2QPLiJVkoQ-FipgDAtZmkl8g9r_iSY",
    authDomain: "anonymousfeedbackapp.firebaseapp.com",
    projectId: "anonymousfeedbackapp",
    storageBucket: "anonymousfeedbackapp.firebasestorage.app",
    messagingSenderId: "921030899001",
    appId: "1:921030899001:web:ccff21c8d7dbffe3c524e8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

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
            // Store feedback in Firestore
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
