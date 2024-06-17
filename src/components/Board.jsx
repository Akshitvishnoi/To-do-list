const Board = ({ task, index, taskList, setTaskList }) => {

    const handelDelete = () => {
        let removeIndex = taskList.indexOf(task);
        taskList.splice(removeIndex, 1);
        setTaskList((currentTasks => currentTasks.filter(todo => index === removeIndex)))

    }
    return (
        <><div className="flex flex-col items-center justify-start md:px-6 rounded-xl text-center text-lg pt-3 pb-4 px-4 m-4 border border-gray-300 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-blue-500 hover:to-teal-400 hover:border-blue-500 transition-all duration-500 ease-in-out shadow-lg transform hover:scale-105">
            <p>{task}</p>
            <button className="bg-gradient-to-r from-red-400 to-red-600 text-white rounded-lg py-2 px-4 mt-4 shadow-md hover:from-red-500 hover:to-red-700 transition-all duration-300 ease-in-out transform hover:scale-105" onClick={handelDelete}>
                Delete
            </button>

        </div>
        </>

    )
}

export default Board