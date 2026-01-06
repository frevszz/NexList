import { useState } from "react";

export default function AddTodoPopup({ onClose, onSave }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !category || !start || !end) {
      alert("Lengkapi semua field");
      return;
    }

    onSave({
      title,
      category,
      start,
      end,
    });

    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-transparant flex items-center justify-center z-50 px-4"
      onClick={onClose}
    >
      <div
        className="bg-white p-8 w-full max-w-xl rounded-lg shadow-xl border border-gray-300"
        onClick={(e) => e.stopPropagation()}
      >
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            placeholder="Activity name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-2 w-full rounded-md bg-[#edf2f8]"
            required
          />

          <input
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-2 w-full rounded-md bg-[#edf2f8]"
            required
          />

          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className="px-2 py-2 font-medium">START</p>
              <input
                type="time"
                value={start}
                onChange={(e) => setStart(e.target.value)}
                className="p-2 w-full rounded-md bg-[#edf2f8]"
                required
              />
            </div>
            <div>
              <p className="px-2 py-2 font-medium">FINISH</p>
              <input
                type="time"
                value={end}
                onChange={(e) => setEnd(e.target.value)}
                className="p-2 w-full rounded-md bg-[#edf2f8]"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={onClose}
              className="bg-red-500 text-white delay-150 duration-300 ease-in-out
                  hover:-translate-y-1 hover:scale-102 hover:shadow-lg rounded-md px-5 py-2 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-gray-200 text-black delay-150 duration-300 ease-in-out
                  hover:-translate-y-1 hover:scale-102 hover:shadow-lg rounded-md px-5 py-2 transition"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
