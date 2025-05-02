import { useState } from "react";

function Todo() {
  const [todoList, setTodoList] = useState([]);

  const saveTodoList = (event) => {
    event.preventDefault();
    const todo = event.target.todo.value;

    if (!todoList.includes(todo)) {
      const finalTodo = [...todoList, todo];
      setTodoList(finalTodo);
    } else {
      alert("Already Exist");
    }
  };
  return (
    <>
      <div className="sm:w-1/2 m-5 rounded-lg flex flex-col min-h-[100px] p-10 text-center bg-red-50 ">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl py-5 text-red-900 font-bold">Todo List:</h1>

          <div className="flex">
            <form onSubmit={saveTodoList}>
              <input
                className=" w-full mb-5 text-red-900 p-5 m-1 border-2 rounded-lg border-gray-400 shadow-lg "
                id="add"
                name="todo"
                placeholder="Add new"
                type="text"
              />

              <button className=" w-full font-light bg-red-800 border rounded-lg border-gray-400 px-20 py-5 text-white-900 shadow-lg hover:bg-red-950 hover:text-red-200">
                +
              </button>
            </form>
          </div>

          <ul>
            {todoList.map((item, index) => (
              <li
                className="w-100 text-red-900 p-5 m-5 border-1 rounded-lg shadow-lg"
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Todo;
