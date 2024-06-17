import { useState } from "react";
import Input from "./components/Input";
import Board from "./components/Board";
function App() {  

  const [taskList, setTaskList] = useState([]);

  console.log(taskList);
  return (
    <div className="px-4">
    <div className="flex flex-col items-center justify-center py-8 gap-4 bg-gradient-to-br from-teal-600 to-blue-600 text-black shadow-xl hover:bg-gradient-to-br hover:from-blue-700 hover:to-teal-700 transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl">
    <h1 className="text-3xl font-semibold text-black animate-bounce  text-shadow-md" style={{ fontFamily: 'Poppins, sans-serif' }}>
  02-to-do-Board
</h1>

      <Input taskList={taskList} setTaskList={setTaskList} />
      </div>
      <div className="grid gap-4 sm:grid-cols-3 px-4 sm:px-8 md:px-10 lg:px-12">
        {taskList.map((task, index) =>
        <Board
         key={index}
         task={task}
         index={index}
         taskList={taskList}
         setTaskList={setTaskList}
        />
      )}
      </div>
    
    </div>
  );
}

export default App;
