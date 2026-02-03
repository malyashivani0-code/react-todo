import { useState } from 'react';
import { useEffect} from 'react'
// import {Add} from './Add.jsx'

function Task() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const existingTodos =
      JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(existingTodos);
  }, []);

  const toggleTodo = (index) => {
    let newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;

    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const handelDelete = (index) => {
    const Confirm = confirm("Are you sure you want to delete this todo?");
    if (!Confirm) return;

    let newTodos = [...todos];
    newTodos.splice(index, 1);

    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  return (
    <div className='flex flex-col justify-center max-w-xl shadow-xl/20 mx-auto mt-20 my-5 bg-violet-100 rounded-lg p-5'>
      <h1 className='text-xl font-bold mb-4'>Your Todos</h1>

     {todos.length === 0 && (
        <p className='text-gray-500'>No Todos Available.</p>
      )}

      {todos.map((todo, index) => (
        <div key={index} className='flex items-center mb-3 gap-4'>
          <ul
           
            className='flex gap-2 flex-1 min-w-0 cursor-pointer'
          >
            <span  onClick={() => toggleTodo(index)} className='flex justify-center items-center shrink-0'>
              {todo.completed ? (
                <img  src="/check.png" />
              ) : (
                <img src="/uncheck.png" />
              )}
            </span>

            <li className='border-b border-gray-300 py-2 w-full min-w-0'>
              <p
                className={`text-lg font-medium truncate ${todo.completed ? "line-through text-gray-500" : ""}`}
              >
                {todo.title}
              </p>
              <p 
              className={`text-sm text-gray-600 wrap-break-word ${todo.completed ? "line-through" : ""}`}>
                {todo.description}
              </p>
            </li>
          </ul>
        
          <button
            onClick={() => handelDelete(index)}
            className='bg-violet-800 shrink-0 hover:bg-violet-950 mt-2 px-2 py-2 font-bold text-white cursor-pointer rounded-lg'
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}

export default Task;
