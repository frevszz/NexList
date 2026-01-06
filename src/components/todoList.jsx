import { deleteTodo, toggleTodo, deleteAllTodos } from "../logic/todoLogic";

export default function TodoList({ todos, categories, onUpdate }) {
  const handleDelete = (todoId) => {
    deleteTodo(todoId);
    onUpdate(); // Refresh UI
  };

  const handleToggle = (todoId) => {
    toggleTodo(todoId);
    onUpdate(); // Refresh UI
  };

  const handleDeleteAll = () => {
    if (confirm("Yakin ingin menghapus semua list?")) {
      deleteAllTodos();
      onUpdate();
    }
  };
  return (
    <div>
      <div className="bg-white px-6 sm:px-8 py-3 mt-3 sm:mt-5 rounded-md">
        <div className="flex items-center gap-3 mt-1 mb-2">
          <span className="opacity-58 text-xs sm:text-[14px] font-semibold tracking-widest">
            TO-DO LIST
          </span>
          <div className="flex-1 h-px bg-[#E37434]"></div>
        </div>

        {/* LIST */}
        <div className="space-y-3 mt-5">
          {todos.map((todo) => {
            // Cari category
            const category = categories.find(
              (cat) => cat.id === todo.categoryId
            );

            return (
              <div key={todo.id} className="flex items-center gap-3">
                <div
                  className={`flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 py-4 px-6 rounded-md flex-1 shadow-md transition-all ${
                    todo.isDone ? "bg-gray-200 opacity-60" : "bg-[#F6F3C2]"
                  }`}
                >
                  <div className="flex flex-col md:grid md:grid-cols-[2fr_1fr_1fr] md:items-center md:gap-12 flex-1">
                    {/* Judul */}
                    <h1
                      className={`font-medium text-[22px] md:text-xl uppercase ${
                        todo.isDone ? "line-through" : ""
                      }`}
                    >
                      {todo.title}
                    </h1>

                    {/* Category */}
                    <h1
                      className={`font-medium text-lg md:text-xl opacity-50 md:opacity-100 uppercase ${
                        todo.isDone ? "line-through" : ""
                      }`}
                    >
                      {category?.name || "No Category"}
                    </h1>

                    {/* Time */}
                    <h1
                      className={`font-medium text-lg md:text-xl opacity-70 md:opacity-100 md:flex-1 md:text-right ${
                        todo.isDone ? "line-through" : ""
                      }`}
                    >
                      {todo.start} - {todo.end}
                    </h1>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-2">
                  {/* Button Delete */}
                  <button
                    onClick={() => handleDelete(todo.id)}
                    className="w-8 h-8 rounded-md bg-red-500 hover:bg-red-600 hover:shadow-md flex items-center justify-center text-white transition-all"
                  >
                    ×
                  </button>

                  {/* Button Checklist */}
                  <button
                    onClick={() => handleToggle(todo.id)}
                    className={`w-8 h-8 rounded-md hover:shadow-md flex items-center justify-center text-white transition-all ${
                      todo.isDone
                        ? "bg-gray-400 hover:bg-gray-500"
                        : "bg-green-500 hover:bg-green-600"
                    }`}
                  >
                    ✓
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-end mt-5 mb-2">
          <button
            onClick={handleDeleteAll}
            className="text-black font-medium transition delay-150 duration-300 ease-in-out
                  hover:-translate-y-1 hover:scale-102 hover:shadow-lg bg-[#D9D9D9] rounded-md px-3 py-2 text-[12px] sm:text-sm "
          >
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
}
