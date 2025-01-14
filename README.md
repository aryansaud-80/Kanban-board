# Kanban Task Manager

This is a Kanban-style task management application built using React. The app allows users to create tasks, drag and drop them between different sections, and have them persist in the browser’s local storage.

## Features

- **Task Creation**: Users can create tasks by adding a title.
- **Drag and Drop**: Tasks can be moved between three sections: To-Do, In Progress, and Completed. -**Sorted**: Tasks are sorted as per their creation time
- **Persistent Data**: All tasks are saved in the browser’s local storage, so they remain available even after refreshing the page.

## Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **React DnD**: A drag-and-drop library used to implement the drag-and-drop functionality.
- **TypeScript**: Provides type safety for better development experience.
- **LocalStorage**: For task persistence.

## How to Use

1. **Create Tasks**: Add new tasks to the "To-Do" section.
2. **Drag and Drop**: Drag tasks between sections (To-Do, In Progress, Completed) to update their status.
3. **Persistence**: Tasks will remain saved even after a page reload because they are stored in localStorage.

## Setup

1. Clone this repository to your local machine.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser to use the app.

## How it works

- You can create tasks by adding them in the **To-Do** section.
- Tasks can be dragged and dropped into the **In Progress** or **Completed** sections.
- Within each section, you can sort tasks by dragging them up or down.

## Folder Structure

- **components/**: Contains all the React components.
- **context/**: Holds the app context to manage task state.
- **icons/**: Stores all the icon components.

## Future Improvements

- Add more task details (e.g., description, due date).
- Implement task editing functionality.
- Improve UI/UX with more interactive features.
