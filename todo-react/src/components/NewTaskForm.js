import React, {  useState } from "react";

function NewTodoForm({ createTodo }) {
  const [userInput, setUserInput] = useState('');

  const handleChange = (event) => {
    console.log(event.target.value);
    setUserInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("TaskForm",userInput );
    const newTodo = { title: userInput };
    createTodo(newTodo);
    setUserInput('');
    console.log(userInput);
  };

  return (
    <form id="form" onSubmit={handleSubmit}>
        <div className='flex-wrapper'>
            <div style={{flex:6}}>
                <input
                    className='form-control'
                    id='title'
                    type="text"
                    value={userInput}
                    onChange={handleChange}
                    name="task"
                    placeholder="Add task ..."
                />
            </div>
            <div style={{flex:1}}>
                <button 
                    id='submit' 
                    className='btn btn-warning'>
                Add
                </button>
            </div>
        </div>
    </form>
  );
}

export default NewTodoForm;
