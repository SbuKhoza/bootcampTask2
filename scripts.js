import { db } from "./firebase/config.js";
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const firstname = document.getElementById("firstname").value.trim();
    const lastname = document.getElementById("lastname").value.trim();
    const email = document.getElementById("emailaddress").value.trim();
    const subject = document.getElementById("subjectline").value.trim();
    const message = document.getElementById("message").value.trim();

    try {
      await addDoc(collection(db, "contact-form"), {
        firstname,
        lastname,
        email,
        subject,
        message,
        timestamp: serverTimestamp(),
      });

      alert("Message sent successfully!");
      form.reset();
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Something went wrong. Please try again later.");
    }
  });
});
