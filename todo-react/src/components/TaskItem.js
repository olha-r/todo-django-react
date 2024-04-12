import React, { useState } from "react";

function Todo({ todo, remove, update, toggleComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(todo.title);

  const handleClick = evt => {
    remove(evt.target.id);
  };
  const toggleForm = () => {
    setIsEditing(!isEditing);
  };
  const handleUpdate = evt => {
    evt.preventDefault();
    update(todo.id, task);
    toggleForm();
  };
  const handleChange = evt => {
    console.log(task);
    setTask(evt.target.value);
  };
  const toggleCompleted = evt => {
    evt.preventDefault();
    console.log("Toggle completed method in TaskItem", "id", todo.id, "value", todo.complete );
    toggleComplete(todo);
  };

  let result;
  if (isEditing) {
    result = (
        <form  onSubmit={handleUpdate} >
            <div className='task-wrapper flex-wrapper'>
                <div style={{flex:7}}>
                    <input lassName="form-control" onChange={handleChange} value={task} type="text" />
                </div>
                <div style={{ flex: 1 }}>
                    <button className='btn btn-small btn-outline-info'>Save</button>
                </div>
            </div>
        </form>
    );
  } else {
    result = (
       <div className='task-wrapper flex-wrapper'>
            <div style={{flex:7}}
            id={todo.id}
            value={todo.complete}
            onClick={toggleCompleted}
            className={`${todo.complete ? 'completed' : 'text-dark'}`}
            >
                <span>
               {todo.complete? <i className="bi bi-check-square " style={{ fontSize: '24px' }}></i>  : <i className="bi bi-square text-info" style={{ fontSize: '24px' }}></i>} </span> 
               {todo.title} 
            </div>

            <div style={{ flex: 1 }}>
                <button className='btn btn-small btn-outline-info' onClick={toggleForm}>
                    <i className="bi bi-pencil-fill" />
                </button>
            </div>
            <div style={{ flex: 1 }}>
                <button onClick={handleClick} className='btn btn-small btn-outline-dark'>
                    <i id={todo.id} className="bi bi-trash" />
                </button>
            </div>
      </div>
    );
  }
  return result;
}

export default Todo;
