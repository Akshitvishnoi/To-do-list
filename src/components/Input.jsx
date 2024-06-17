import { useState } from "react";

const Input = ({taskList, setTaskList}) => {
  const [input, setInput] = useState("");

  const handelAddTask = (e) =>{
    e.preventDefault();
    setTaskList([...taskList, input]);
    setInput("");
  }


  return (
    <>
      <form className="felx flex-row items-center gap-3">
        <input
          className="border border-gray-300 rounded-full px-4 py-2 text-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out transform hover:scale-105 bg-gray-300"
          type="text"
          placeholder= "Add a Task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="py-2 px-4 bg-blue-900 text-white rounded-lg font-semibold hover:opacity-70 m-4" onClick={handelAddTask}>Add</button>
      </form>
    </>
  );
};

export default Input;
