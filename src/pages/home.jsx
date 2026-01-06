import { useEffect, useState } from "react";
import AddTodoPopup from "../components/addTodoPopup";
import DeleteConfirmPopup from "../components/deleteConfirmPopup";
import TodoList from "../components/todoList";
import { getTodos, addTodo, deleteTodosByCategory } from "../logic/todoLogic";
import {
  getCategories,
  createCategoryIfNotExist,
  deleteCategory,
} from "../logic/categoryLogic";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [todos, setTodos] = useState([]);
  const [categories, setCategories] = useState([]);
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  const loadTodos = () => {
    setTodos(getTodos());
  };

  useEffect(() => {
    loadTodos();
    setCategories(getCategories());
  }, []);

  const handleSaveTodo = ({ title, category, start, end }) => {
    const cat = createCategoryIfNotExist(category);
    setCategories(getCategories());

    addTodo({
      title,
      categoryId: cat.id,
      start,
      end,
    });

    loadTodos();
  };

  const handleDeleteCategory = (categoryId) => {
    deleteTodosByCategory(categoryId);
    deleteCategory(categoryId);
    setCategories(getCategories());
    loadTodos();
    setDeleteConfirm(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <div className="hero items-center px-5 sm:px-5 xl:px-30 py-5 sm:py-4 max-w-7xl mx-auto">
          <h1 className="text-xl sm:text-3xl font-bold sm:font-medium mt-1 sm:mt-5">
            Ready to get things done?
          </h1>
          <p className="text-m sm:text-2xl font-medium opacity-50 mt-2">
            Let's turn ideas into progress.
          </p>

          {/* CREATE LIST */}
          <div className="bg-white px-3 sm:px-6 py-3 mt-3 sm:mt-5 rounded-md">
            <div className="flex items-center gap-3 mb-4">
              <span className="opacity-58 text-xs sm:text-[14px] font-semibold tracking-widest">
                CREATE LIST
              </span>
              <div className="flex-1 h-px bg-[#E37434]"></div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {/* Daftar Category */}
              {categories.map((cat) => (
                <div
                  key={cat.id}
                  onContextMenu={(e) => {
                    e.preventDefault();
                    setDeleteConfirm(cat);
                  }}
                  className="flex items-center gap-2 bg-[#F6F3C2] px-4 py-3 rounded-md shadow-md mb-2 cursor-context-menu hover:bg-[#f0ecb3] transition-colors"
                >
                  <span className="text-2xl">{cat.icon || "📁"}</span>
                  <span className="font-medium text-sm uppercase">
                    {cat.name}
                  </span>
                </div>
              ))}

              {/* BUTTON + */}
              <button
                onClick={() => setShowPopup(true)}
                className="bg-[#F6F3C2] px-4 py-3 rounded-md shadow-md text-3xl text-[#E37434] transition-all duration-300 ease-in-out
              hover:-translate-y-1 hover:scale-102 mb-2"
              >
                <i className="ri-add-large-fill"></i>
              </button>
            </div>
          </div>

          {/* TODO LIST - pass loadTodos sebagai onUpdate */}
          <div className="mt-6">
            <TodoList
              todos={todos}
              categories={categories}
              onUpdate={loadTodos}
            />
          </div>
        </div>
      </main>

      {/* POPUP */}
      {showPopup && (
        <AddTodoPopup
          onClose={() => setShowPopup(false)}
          onSave={handleSaveTodo}
        />
      )}

      {/* DELETE CONFIRM POPUP */}
      {deleteConfirm && (
        <DeleteConfirmPopup
          categoryName={deleteConfirm.name}
          onConfirm={() => handleDeleteCategory(deleteConfirm.id)}
          onCancel={() => setDeleteConfirm(null)}
        />
      )}
    </div>
  );
}

export default App;
