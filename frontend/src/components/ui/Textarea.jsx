export default function Textarea({ label, rows = 4, placeholder }) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-gray-700">
        {label}
      </label>
      <textarea
        rows={rows}
        placeholder={placeholder}
        className="w-full px-4 py-3 text-sm font-medium placeholder-gray-400 transition border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-100"
      />
    </div>
  );
}

