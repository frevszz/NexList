function DeleteConfirmPopup({ categoryName, onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm mx-4">
        <h2 className="text-xl font-bold mb-4 text-gray-800">
          Hapus Category?
        </h2>
        <p className="text-gray-600 mb-6">
          Apakah Anda yakin ingin menghapus category{" "}
          <span className="font-semibold text-gray-800">"{categoryName}"</span>?
          Semua list dalam category ini juga akan dihapus dan tidak dapat
          dipulihkan.
        </p>

        <div className="flex gap-3 justify-end">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-md bg-gray-200 text-gray-800 font-medium hover:bg-gray-300 transition-colors"
          >
            Batal
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-md bg-red-500 text-white font-medium hover:bg-red-600 transition-colors"
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmPopup;
