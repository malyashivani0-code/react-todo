import { useState } from 'react';
import { useEffect} from 'react'

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
    const isConfirm = confirm("Are you sure you want to delete this todo?");
    if (!isConfirm) return;

    let newTodos = [...todos];
    newTodos.splice(index, 1);

    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  return (
    <div className='flex flex-col justify-center max-w-xl mx-auto my-5 bg-violet-100 rounded-lg p-5'>
      <h1 className='text-xl font-bold mb-4'>Your Todos</h1>

      {todos.length === 0 && (
        <p className='text-gray-500'>No Todos Available.</p>
      )}

      {todos.map((todo, index) => (
        <div key={index} className='flex gap-2 items-start mb-3'>
          <ul
            onClick={() => toggleTodo(index)}
            className='flex gap-2 w-full cursor-pointer'
          >
            <span className='flex justify-center items-center'>
              {todo.completed ? (
                <img  src="/check.png" />
              ) : (
                <img src="/uncheck.png" />
              )}
            </span>

            <li className='border-b border-gray-300 py-2 w-full'>
              <p
                className={`text-lg font-medium ${
                  todo.completed ? "line-through text-gray-500" : ""
                }`}
              >
                {todo.title}
              </p>
              <p className={`text-sm text-gray-600 ${todo.completed ? "line-through" : ""}`}>
                {todo.description}
              </p>
            </li>
          </ul>

          <button
            onClick={() => handelDelete(index)}
            className='bg-violet-800 hover:bg-violet-900 px-2 py-2 font-bold text-white rounded-lg'
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}

export default Task;
