# Personal Portfolio Website

This repository contains the source code for my personal portfolio website. It is a single-page application built with vanilla HTML, CSS, and JavaScript, designed to showcase my professional experience, technical skills, and cloud certifications. 

The design is a premium, clean, and modern light-mode layout inspired directly by the typography, geometric grid alignments, and color systems of the *Psycho-Cybernetics* book covers.

## Live Demo

The portfolio is live at [lawsalazar.github.io/my-portfolio](https://lawsalazar.github.io/my-portfolio/).

## Features

-   **Psycho-Cybernetics Aesthetics:** A warm cream/ivory background (`#FAF6EB`), solid carbon-black text, and vibrant orange-red accents, detailed with sharp offset retro drop shadows and grid lines.
-   **Interlocking Profile Wave:** A custom responsive SVG silhouette wave divider at the base of the Hero section, translating the book cover artwork into web mechanics.
-   **Interactive Concentric Guidance Target:** Concentric dashed alignment rings that follow the mouse cursor with smooth physics-lag and steering rotation coordinates.
-   **Vintage Typewriter Console Mockup:** An interactive terminal command-line logger styled as a warm typewriter sheet draft on card paper.
-   **Responsive Layout:** Fully optimized for desktop, tablet, and mobile viewing with zero-radius Swiss structural containers.
-   **Observability Metrics:** Staggered on-scroll fade-in entries and numerical count-up statistics counters.

## Technologies Used

-   **HTML5**: For the semantic structure of the website.
-   **CSS3**: For all styling, layout, typography scaling, and scroll reveals.
-   **JavaScript**: For DOM manipulation, cursor parallax, and terminal console simulations.
-   **Font Awesome**: For scalable vector icons.

## Project Structure

```
my-portfolio/
├── index.html
├── script.js
├── styles.css
└── README.md
```

-   [`index.html`](index.html): The main entry point containing the site structure, SVG definitions, and page content.
-   [`styles.css`](styles.css): Contains the Psycho-Cybernetics CSS design tokens, typography rules, alignment blueprint grids, and typewriter console modifications.
-   [`script.js`](script.js): Handles the navigation highlights, smooth scroll, typing simulations, and interactive cursor target tracking.

## How to Use

To set up this project locally:

1.  Clone the repository:
    ```sh
    git clone https://github.com/lawsalazar/my-portfolio.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd my-portfolio
    ```
3.  Open `index.html` in your browser to view the site, or start a simple local server:
    ```sh
    python3 -m http.server 8000
    ```
