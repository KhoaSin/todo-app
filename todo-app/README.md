To-Do App Features
Overview:
This To-Do App allows users to manage their tasks efficiently with various features to add, complete, edit, delete, and filter tasks. It also includes a dark mode for a better user experience.

Features:
Add New Task

Users can add new tasks by typing in the input field and clicking the "Add" button.

Each task has a unique identifier and a completed status (initially false).

Toggle Task Completion

Tasks can be marked as completed or uncompleted by clicking on the task.

When a task is completed, it gets a line-through style to visually indicate it is finished.

Edit Task

Users can edit the content of a task.

Editing a task allows the user to update the text and save the changes.

Delete Task

Users can delete individual tasks by clicking the delete button associated with each task.

The task is immediately removed from the list.

Filter Tasks

Users can filter the tasks based on their completion status:

All: Shows all tasks.

Active: Shows tasks that are not completed.

Completed: Shows tasks that are completed.

Search Tasks

A search bar allows users to filter tasks by keywords.

The search is case-insensitive and matches any part of the task text.

Complete All Tasks

A button allows users to mark all tasks as completed at once.

This updates the completed status of all tasks to true.

Uncomplete All Tasks

A button allows users to mark all tasks as uncompleted at once.

This updates the completed status of all tasks to false.

Delete All Tasks

A button allows users to delete all tasks from the list at once.

This clears the entire list of tasks.

Dark Mode Toggle

Users can switch between light mode and dark mode.

The app remembers the user's preference for dark mode across sessions using localStorage.

Data Persistence:
Tasks are saved in localStorage to persist the data even after the page is reloaded or the app is closed and reopened.

The state of dark mode is also saved in localStorage, ensuring the preference is maintained.

UI Design:
The app has a clean, minimalist design with easy-to-use buttons for each function.

The dark mode provides a more comfortable viewing experience in low-light environments.

The app is responsive and works well on both mobile and desktop screens.

