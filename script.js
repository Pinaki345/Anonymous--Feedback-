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
document.getElementById("submitBtn").addEventListener("click", async function() {
    let feedback = document.getElementById("feedback").value;

    if (feedback.trim() === "") {
        alert("Please enter feedback before submitting.");
        return;
    }

    try {
        await addDoc(collection(db, "feedbacks"), {
            text: feedback,
            timestamp: serverTimestamp()
        });

        // Show thank you message and feedback link
        document.getElementById("message").innerText = "Thanks for your feedback!";
        document.getElementById("feedback").value = ""; // Clear input
        document.getElementById("feedbackLink").style.display = "block";
    } catch (error) {
        console.error("Error submitting feedback:", error);
        alert("Error submitting feedback. Try again!");
    }
});
