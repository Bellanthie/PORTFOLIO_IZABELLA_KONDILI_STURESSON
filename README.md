# FrontEndLabb1 – Portfolio Website

Personal multi-page portfolio website built with HTML and CSS.

## Pages

- `index.html` – Home page with hero section and profile image.
- `om-mig.html` – About me page with a hello, additional text and 'see my work' link to Portfolio.
- `cv.html` – CV page with education, work experience, skills, and languages.
- `portfolio.html` – Portfolio grid with project cards and modal popups.
- `kontakt.html` – Contact page with email, phone, location, and LinkedIn: addon 'open in new window' direct link to LinedIn.

## Current Features

- Shared top navigation across all pages with active page highlighting.
- Responsive layout (desktop/tablet/mobile behavior via media queries).
- Profile image styling (circular image in Home/About/Contact sections).
- Portfolio section with 3 projects:
  - Library System
  - Bank App
  - Pyramid
- Modal popups for project details in portfolio.
- Contact section includes:
  - Clickable email link using `mailto:` with prefilled subject.
  - External LinkedIn link opened in new tab with `rel="noopener noreferrer"`.

## Typography

- Main site font: Gabriela (`"Gabriela", serif`).
- Navigation font can be overridden separately in `style.css` if needed.
- Texten försöker anpassa sig till skärmen utan att bli för liten eller för stor.
- clamp() funktion: min 1.05rem: golvet (texten får aldrig bli mindre än detta)
- rem -> root em: "min size 1.05rem" storleken baserad på root-fonten i HTML. standar är browsers 16px.
- vw -> vewport width: "1.8% av skärmens bredd" --> av låt texten växa baserat på skärmens bredd.
- rem -> root em: "1.5rem (taket)" --> även om skärmen är enorm=4k monitor, kommer texten aldrig bli större än 24px

* clamp() ger texten ett kontrollerat elastiskt beteende.

## Assets

- Local profile image renamed to `izabella-profile.jpg` and used consistently.
- Pyramid project image: `Pyramid.webp`.

## Tech Stack

- HTML5
- CSS3
- Google Fonts

## How to Run

1. Open the project folder in VS Code.
2. Open `index.html` in browser (or run with Live Server).
3. Navigate between pages using the navbar.

## Notes

- Main styling is in `style.css`.
- section-specific CSS organized by page section (`.hero`, `.about`, `.cv`, `.portfolio`, `.contact`) for easier maintenance.
