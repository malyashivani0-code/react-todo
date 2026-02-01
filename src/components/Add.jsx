import { useState } from 'react'

function Add() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = () => {
    if (title === "" || description === "") {
      alert("Please enter both title and description");
      return;
    }

    // localStorage se todos lao
    const existingTodos =
      JSON.parse(localStorage.getItem("todos")) || [];

    // duplicate check (title ke basis par)
    let isExist = false;

    for (let i = 0; i < existingTodos.length; i++) {
      if (existingTodos[i].title === title) {
        isExist = true;
        break;
      }
    }
    if (isExist) {
      alert("Todo already exists");
      setTitle("");
      setDescription("");
      return;
    }

    // new todo object
    const newTodo = {
      title: title,
      description: description,
      completed: false,
    };

    const updatedTodos = [...existingTodos, newTodo];

    // localStorage me save
    localStorage.setItem("todos", JSON.stringify(updatedTodos));

    alert("Todo Added Successfully");

    // inputs clear
    setTitle("");
    setDescription("");
  };

  return (
    <div className='flex flex-col justify-center max-w-xl mx-auto m-5 bg-violet-100 rounded-lg p-5'>
      <h1 className='text-xl font-bold mb-4'>Add Todo</h1>

      <div className='flex flex-col gap-3'>
        <input
          type="text"
          className='focus:outline-violet-900 w-full border border-gray-300 rounded-lg p-3'
          placeholder='Enter Todo Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          className='focus:outline-violet-900 w-full border border-gray-300 rounded-lg p-3'
          placeholder='Enter Todo Description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          onClick={handleAdd}
          className='bg-violet-800 hover:bg-violet-900 px-4 py-2 font-bold cursor-pointer text-white rounded-lg'
        >
          Add
        </button>
      </div>
    </div>
  )
}

export default Add
