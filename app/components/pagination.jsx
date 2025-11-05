export default function Pagination({ info, page, onPageChange }) {
  if (!info) return null;

  return (
    <div className="flex justify-center items-center gap-4 my-6">
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={!info.prev}
        className={`px-4 py-2 rounded-lg ${
          info.prev
            ? "bg-green-600 hover:bg-green-700"
            : "bg-gray-600 cursor-not-allowed"
        }`}
      >
        Prev
      </button>

      <span className="text-lg font-semibold">Page {page}</span>

      <button
        onClick={() => onPageChange(page + 1)}
        disabled={!info.next}
        className={`px-4 py-2 rounded-lg ${
          info.next
            ? "bg-green-600 hover:bg-green-700"
            : "bg-gray-600 cursor-not-allowed"
        }`}
      >
        Next
      </button>
    </div>
  );
}
