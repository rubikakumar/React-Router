# React-Router Project

## Project Overview

The **React-Router Project** is a dynamic web application that leverages **React Router DOM** for seamless navigation between different course categories like Full Stack Development, Data Science, Cyber Security, and Career. The app focuses on providing a user-friendly experience to explore educational content.

## Features

- **Category Navigation**: Navigate between multiple course categories including Full Stack Development, Data Science, and Cyber Security using React Router.
- **Responsive Design**: The layout is fully responsive and optimized for mobile, tablet, and desktop screens.
- **Dynamic Course Data**: Display latest course details by updating the `data.js` file dynamically with information from external sources.
- **Reusable Components**: Utilizes reusable components such as `AllCom`, `Card`, `Footer`, `Menu`, and more to maintain clean and modular code.

## Technologies Used

- **React.js**: A JavaScript library for building user interfaces.
- **React Router DOM**: Enables dynamic routing for the app.
- **CSS**: Custom styles to enhance the look and feel of the application.

## Setup and Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/rubikakumar/React-Router.git
    ```
2. Navigate to the project directory:
    ```bash
    cd React-Router
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm run dev
    ```
5. Open the application in your browser at:
    ```
    http://localhost:5174/
    ```

## Running the Application

To run the project locally, use the command `npm run dev`, which will start a Vite development server at **http://localhost:5174/**. You can navigate through the different course categories and explore the content.

## Code Explanation

The project is structured with the following core components:
- **App.jsx**: The main component that holds the structure and routing logic.
- **AllCom.jsx, FullStackDev.jsx, DataScience.jsx, CyberSecurity.jsx, Career.jsx**: Components representing different course categories.
- **Menu.jsx**: Contains the navigation menu that enables smooth transitions between categories using React Router.
- **Footer.jsx**: A reusable footer component.
- **Card.jsx**: Displays individual course cards with details like title, description, and date.

## Development Process

1. Set up the basic structure and installed dependencies including React Router DOM.
2. Created reusable components for the app layout.
3. Implemented dynamic routing to switch between course categories.
4. Styled the application for responsiveness and ease of use.
