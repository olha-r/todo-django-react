## FocusMe: A Todo List App

This is a todo list application called FocusMe, built with Django for the backend API, React for the frontend, and PostgreSQL as the database.

## Description

FocusMe helps you manage your tasks and stay organized. You can create, view, update, and delete todo items, keeping you focused on what matters most.

## Technologies Used

* Backend: Django (Python web framework)
* API: Django REST framework (for building RESTful APIs)
* Database: PostgreSQL (relational database management system)
* Frontend: React (JavaScript library for building user interfaces)

## Installation

### Prerequisites:

1. Ensure you have Python (version 3.x recommended) and pip (package manager) installed. You can verify these by running `python --version` and `pip --version` in your terminal.
2. Install Node.js and npm (or yarn) for managing React dependencies. Check versions with `node -v` and `npm -v` (or `yarn -v`).

### Clone the Repository:

```
git clone https://github.com/olha-r/todo-django-react.git
cd api
```

### Create a Virtual Environment (Recommended):

```
python -m venv venv
source venv/bin/activate  # For Linux/macOS
venv\Scripts\activate.bat  # For Windows
```

### Install Dependencies:

```
pip install -r requirements.txt  # Backend dependencies
cd todo-react  # Navigate to the frontend directory
npm install  # Install React dependencies (or yarn install)
```

### Database Setup
1. Ensure you have PostgreSQL installed:

Refer to the official PostgreSQL documentation for your operating system on how to install it: [PostgreSQL Documentation](https://www.postgresql.org/docs/current/tutorial-install.html)

2. Create a Database:

Once installed, use the psql command-line tool to connect to PostgreSQL and create a database for your project. Here's an example:

```Bash
psql -h localhost -U postgres -c "CREATE DATABASE focusme_db;"
```
Replace focusme_db with your desired database name.
You might need to enter your PostgreSQL password when asked.

3. Apply Django Migrations:

```Bash
python manage.py migrate
```

## Running the Application

### Start the Django Backend:

```
cd ..  # Move back to the project root directory
python manage.py runserver
```

   This typically starts the server on `http://localhost:8000/`.

### Build and Run the React Frontend:

```
cd todo-react
npm run build  # Build the React production files (or yarn run build)
npm start  # Start the development server (or yarn start)
```

   The React development server usually runs on `http://localhost:3000/` by default.

## Features

* Create new todo items
* View a list of all todo items
* Update existing todo items (mark as complete/incomplete, edit text)
* Delete todo items

## Database Tables

### Task

This table represents the tasks in the application.

| Field       | Type         | Description                  |
|-------------|--------------|------------------------------|
| id          | Integer      | Primary key                  |
| title       | CharField    | Title of the task            |
| complete    | BooleanField | Indicates if the task is completed |
| create      | DateTimeField| Timestamp of creation        |




## Additional Notes

  * Screenshots of the FocusMe app's interface

  ![Screenshot 1](https://web-projects-screenshots.s3.eu-west-3.amazonaws.com/focusme-main.png)