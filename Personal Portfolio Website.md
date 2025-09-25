# Personal Portfolio Website

This repository contains the source code for my personal portfolio website. It is a single-page application built with vanilla HTML, CSS, and JavaScript, designed to showcase my professional experience, technical skills, and certifications. The design is clean, modern, and inspired by the aesthetics of Notion and Apple.

## Live Demo

The portfolio is live at [lawrencenelson.com](http://lawrencenelson.com).

## Features

-   **Responsive Design**: The layout is fully responsive and optimized for viewing on desktops, tablets, and mobile devices.
-   **Interactive UI**: Smooth scrolling, on-scroll animations powered by the Intersection Observer API, and a dynamic typing effect in the hero section.
-   **Structured Sections**: Includes dedicated sections for:
    -   Home
    -   About Me
    -   Work Experience (timeline format)
    -   Technical Skills
    -   Certifications
    -   Contact Information
-   **Modern Tooling**: Built with modern web standards, including CSS variables for easy theming and ES6+ JavaScript for dynamic functionality.

## Technologies Used

-   **HTML5**: For the semantic structure of the website.
-   **CSS3**: For all styling, including layout, animations, and responsive design.
-   **JavaScript**: For DOM manipulation, event handling, and interactive features.
-   **Font Awesome**: For scalable vector icons.

## Project Structure

```
my-portfolio/
├── CNAME
├── index.html
├── script.js
└── styles.css
```

-   [`index.html`](my-portfolio/index.html): The main entry point containing all the site's content and structure.
-   [`styles.css`](my-portfolio/styles.css): Contains all the CSS rules for styling the website, including animations and media queries for responsiveness.
-   [`script.js`](my-portfolio/script.js): Handles all the client-side interactivity, such as the mobile navigation, scroll effects, and animations.
-   [`CNAME`](my-portfolio/CNAME): Defines the custom domain for GitHub Pages deployment.

## How to Use

To set up this project locally or use it as a template:

1.  Clone the repository:
    ```sh
    git clone https://github.com/your-username/my-portfolio.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd my-portfolio
    ```
3.  Open `index.html` in your browser to view the site.
4.  Modify `index.html` to add your personal information, experience, and skills.
5.  Customize the look and feel by editing the CSS variables at the top of `styles.css`.