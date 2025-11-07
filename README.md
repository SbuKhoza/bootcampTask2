# Steady Hotel App

**Live Demo:** [https://steady-hotel-app.web.app/](https://steady-hotel-app.web.app/)  
**Repository:** [https://github.com/SbuKhoza/bootcampTask2](https://github.com/SbuKhoza/bootcampTask2)

---

## Overview

The Steady Hotel App is a responsive front-end web project built with HTML, CSS, and JavaScript, and hosted on Firebase.  
It features a clean, mobile-friendly design with a banner, navigation bar, about section, and a functional contact form connected to Firebase Firestore for data storage.

This project demonstrates key web development concepts such as responsive layouts, modular JavaScript, and Firebase integration.

---

## Features

### Navigation Bar
- Responsive navigation with a hamburger menu for mobile screens.  
- Centered links for easy access to sections.  
- Smooth toggle animations and clear structure.

### Banner Section
- Displays a responsive header image (assets/Stepup2.png).  
- Maintains proportions with object-fit: cover for consistent visuals.

### About Section
- Provides a concise company overview.  
- Uses semantic HTML and smooth internal navigation.

### Contact Form
- Includes fields for:
  - Name  
  - Surname  
  - Email  
  - Subject  
  - Message  
- Submissions are stored in Firebase Firestore under the contact-form collection.  
- Displays success/error alerts based on the response.

### Mobile Responsiveness
- Optimized for multiple screen sizes:
  - Tablets (≤1024px)
  - Medium screens (≤768px)
  - Small mobile (≤480px)
  - Extra small (≤360px)
- Layout and font sizes automatically adjust for readability.

---

## Technologies Used

| Category | Tools |
|-----------|--------|
| Frontend | HTML5, CSS3, JavaScript (ES6 Modules) |
| Backend / Database | Firebase Firestore |
| Hosting | Firebase Hosting |
| Analytics | Firebase Analytics |

---

## Project Structure

```
project-folder/
│
├── index.html             # Main webpage structure
├── styles.css             # Styles and responsiveness
├── scripts.js             # Handles Firestore form submission
├── firebase/
│   └── config.js          # Firebase configuration and initialization
├── assets/
│   └── Stepup2.png        # Banner image
└── README.md              # Project documentation
```

---

## Firebase Setup

### Firebase Configuration (firebase/config.js)
```javascript
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC24TlWMY8yZ96YqMyBVB7W21wMvmqgk2A",
  authDomain: "steady-hotel-app.firebaseapp.com",
  projectId: "steady-hotel-app",
  storageBucket: "steady-hotel-app.firebasestorage.app",
  messagingSenderId: "901720182902",
  appId: "1:901720182902:web:43a17df58050e9767c0f57",
  measurementId: "G-Y2WT44GLVM"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
```

### Firestore Integration (scripts.js)
```javascript
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
```

---

## How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/SbuKhoza/bootcampTask2.git
   ```
2. Open the folder in your preferred code editor (e.g., VS Code).  
3. Set up Firebase:
   - Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Enable Firestore Database.
   - Copy your project’s configuration and update it in firebase/config.js.
4. Preview locally:
   ```bash
   firebase serve
   ```
5. Visit http://localhost:5000 to view your site.

---

## Hosting Details

- Platform: Firebase Hosting  
- URL: [https://steady-hotel-app.web.app/](https://steady-hotel-app.web.app/)  
- Deploy command:
  ```bash
  firebase deploy
  ```

---

## Future Enhancements

- Add loading spinners and inline form validation.  
- Enable admin dashboard for message review.  
- Fetch About section data dynamically from Firestore.  
- Add animation transitions for smoother UI interactions.  
- Implement a dark mode toggle.

---

## Author

Malloya (Sibusiso Khoza)  
Email: sibusisok59@gmail.com  
Frontend Developer | Passionate about clean, responsive, and interactive design.

---

## License

This project is open source and available under the MIT License.

---

## Summary

The Contact Form demonstrates a modern, responsive layout with Firestore integration for real-time message storage.  
It’s a solid foundation for building fully functional web apps using Firebase and modular JavaScript.
