import React, {  useState, useEffect } from 'react';
import axios from 'axios';
import TaskItem from './TaskItem'
import NewTaskForm from './NewTaskForm'

function Todo() {

const [todos, setTodos] = useState([]);

const getTaskList = async () => {
    try {
    const response = await axios.get('http://localhost:8000/api/task-list/');
    console.log('Fetch tasks: ', response.data);
    setTodos(response.data);
    } catch (error) {
    console.error('Error fetching tasks:', error);
    }
};

  useEffect(() => {
    getTaskList();
  }, []);

  const create = async(newTodo) => {
    try {
      const response = await axios.post('http://localhost:8000/api/task-create', newTodo);
      console.log('Task created:', response.data);
      getTaskList();
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  const remove =async(id)  => {
    try {
      await axios.delete(`http://localhost:8000/api/task-delete/${id}`);
    //   onDelete(task.id);
        getTaskList();
        } catch (error) {
        console.error('Error deleting task: ', error);
        }
        // setTodos(todos.filter(todo => todo.id !== id));
  };

  const update = (id, updtedTask) => {
    const body = {
        "title": updtedTask
    }
    edit(id, body);
  };

  const edit = async (id, updtedTask) => {
    console.log("Edit", updtedTask);
        try {
            const url = `http://localhost:8000/api/task-update/${id}`;
            const response = await axios.put(url,  updtedTask);
            console.log("Edit response", response);
            getTaskList();
        } catch (error) {
        console.error('Error updating task: ', error);
        }
  };

  const toggleComplete = (todo) => {
    const updateTask = {
        "title": todo.title,
        "complete": !todo.complete
    }
    console.log("Body to update", updateTask);
    edit(todo.id, updateTask)
    getTaskList();
  };

  const todosList = todos.map(todo => (
    <TaskItem
      toggleComplete={toggleComplete}
      update={update}
      remove={remove}
      key={todo.id}
      todo={todo}
    />
  ));

  return (
    <span>
    <div id="form-wrapper">
      <NewTaskForm createTodo={create} />
    </div>
     <div id='list-wrapper'>{todosList}</div>
     </span>
  );
}


export default Todo;