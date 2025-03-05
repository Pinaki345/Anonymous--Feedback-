// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "your-project-id.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project-id.appspot.com",
    messagingSenderId: "your-messaging-sender-id",
    appId: "your-app-id"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Feedback Submission
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
            await addDoc(collection(db, "feedbacks"), {
                text: feedback,
                timestamp: serverTimestamp()
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
