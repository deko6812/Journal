// Import Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "script.js" //"https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// TODO: Replace with your Firebase project configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Save button handler
document.getElementById("saveBtn").addEventListener("click", async () => {
  const journalData = {
    date: document.getElementById("date").value,
    time: document.getElementById("time").value,
    agenda: document.getElementById("agenda").value,
    attendees: document.getElementById("attendees").value,
    subject: document.getElementById("subject").value,
    object: document.getElementById("object").value,
    notes: document.getElementById("notes").value,
    createdAt: new Date().toISOString()
  };

  try {
    await addDoc(collection(db, "daily_journals"), journalData);
    alert("✅ Journal saved to the cloud!");
  } catch (e) {
    console.error("Error adding document: ", e);
    alert("❌ Failed to save journal.");
  }
});
