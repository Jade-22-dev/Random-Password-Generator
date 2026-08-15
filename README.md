# Random Password Generator

A simple password generator built with HTML, Tailwind CSS, and vanilla JavaScript.

## Features

- Generates a random password based on selected options
- Adjustable password length (4–30 characters)
- Toggle character types:
  - Uppercase (A-Z)
  - Lowercase (a-z)
  - Numbers (0-9)
  - Symbols (!@#$%^&*...)
- One-click copy to clipboard
- Press Enter to generate

## Project Structure
├── index.html
├── js/
│ ├── script.js # Event listeners and DOM setup
│ ├── generateResult.js # Generates the random password
│ ├── validateCopy.js # Copy-to-clipboard logic
│ └── renderUI.js # Renders the UI markup
└── README.md

## How to Use

1. Open `index.html` in your browser (no build step needed)
2. Select the character types you want
3. Set the password length
4. Click **Generate Password** or press **Enter**
5. Click the copy icon to copy the password