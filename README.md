# Rocketseat To-Do App Practical Challenge

This is a simple To-Do application built with ReactJS as part of the Rocketseat practical challenge. The application allows users to add, complete, and delete tasks.

## Features

- Add new tasks
- Mark tasks as completed
- Delete tasks
- Display the total number of tasks and the number of completed tasks
- Display a message when there are no tasks

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/rachelmgaldino/simple-todo-app.git
```

2. Navigate to the project directory:

```bash
cd simple-todo-app
```

3. Install the dependencies:

```bash
npm install
# or
yarn install
```

### Running the Application

To start the development server, run:

```bash
npm start
# or
yarn start
```

The application will be available at `http://localhost:3000`.

## Project Structure

```plaintext
rocket-todo-app/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── assets/
│   │   ├── rocket-logo.svg
│   │   └── clipboard.svg
│   ├── components/
│   ├── App.jsx
│   ├── App.module.css
│   ├── global.css
│   └── index.js
├── .gitignore
├── package.json
└── README.md
```

## Components

### App.jsx

The main component of the application. It contains the state and logic for managing tasks, including adding, completing, and deleting tasks.

### App.module.css

The CSS module for styling the `App` component.

### global.css

Global CSS styles for the application.

## Usage

### Adding a Task

1. Enter the task description in the input field.
2. Click the "Criar" button or press Enter to add the task.

### Completing a Task

1. Click the checkbox next to the task to mark it as completed.
2. The task will be displayed with a strikethrough and a checkmark icon.

### Deleting a Task

1. Click the trash icon next to the task to delete it.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements

- [Rocketseat](https://rocketseat.com.br/) for the practical challenge and resources.
- [Phosphor Icons](https://phosphoricons.com/) for the icons used in the application.