# Responsive Contact Form Webpage (UI Only)

This project is a responsive front-end webpage built using HTML5 and CSS3. It features a navigation bar, banner image, about section, and a contact form. The design is mobile-friendly and serves as a user interface prototype without JavaScript functionality yet. Future versions will include interactivity such as a working hamburger menu and form submission handling.



## Project Structure


project-folder/
│
├── index.html        # Main HTML file (UI layout)
├── styles.css        # Styling and responsive layout
└── assets/
    └── Stepup2.png   # Banner image used in the header


## Features

### Navigation Bar
- Simple horizontal menu for desktop.
- Collapses into a hamburger icon on smaller screens.
- Centered alignment with hover color effects.

### Banner Section
- Displays a full-width image from the assets folder.
- Maintains proportional size across devices with `object-fit: cover`.

### About Section
- Contains a centered title and descriptive paragraph.
- Uses smooth scrolling for internal navigation links.
- Styled with a light background color for contrast.

### Contact Form
- Includes fields for:
  - Name
  - Surname
  - Email Address
  - Subject
  - Message
- Clean input and button styling with rounded corners.
- Centered submit button with hover transition.

### Mobile-Friendly Layout
- Responsive design achieved with CSS media queries for various screen sizes:
  - Tablet (max-width: 1024px)
  - Medium mobile (max-width: 768px)
  - Small mobile (max-width: 480px)
  - Extra small (max-width: 360px)
- Layout and text size automatically adjust for readability.

---

## Technologies Used

- HTML5 – for structure and content
- CSS3 – for styling and responsive design

Note: The webpage does not use JavaScript at this stage. It is a static user interface only, prepared for future integration.

---

## Setup Instructions

1. Download or clone this repository:
   ```bash
   git clone https://github.com/SbuKhoza/bootcampTask1.git
   ```
2. Open the folder in your code editor.
3. Place the `Stepup2.png` image inside the `assets/` directory.
4. Open `index.html` in your web browser to view the page.

---

## CSS Overview

| Section | Description |
|----------|-------------|
| nav | Aligns navigation links and centers them with hover effects. |
| .menu-toggle | Hidden by default and visible on mobile for the hamburger icon. |
| .banner | Displays a full-width responsive header image. |
| .about | Centers heading and paragraph text with consistent padding. |
| .contact | Defines form layout, spacing, and button design. |
| @media queries | Adjust widths, font sizes, and layout for smaller screens. |

---

## Future Enhancements

- Add JavaScript for the hamburger menu toggle.
- Connect the form to a backend or service such as Formspree or EmailJS.
- Implement client-side form validation and success messages.

---

## Author

Malloya  
Email: sibusisok59@gmail.com  
Frontend Developer | Focused on clean, responsive, and user-friendly design

---

## License

This project is open source and available under the MIT License.

---

## Summary

This webpage demonstrates a responsive front-end design for an "About Us" and "Contact" page layout. It is currently a static user interface without JavaScript but serves as a strong foundation for future interactive development.
