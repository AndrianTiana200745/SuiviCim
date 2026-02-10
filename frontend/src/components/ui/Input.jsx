export default function Input({ 
  label, 
  type = "text", 
  placeholder, 
  value,
  onChange,
  error
}) {
  return (
    <div className="mb-1">
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`
          w-full px-4 py-3 rounded-lg border-2 font-medium
          placeholder-gray-400 bg-white
          transition-all duration-200
          focus:outline-none
          ${error 
            ? 'border-red-300 focus:border-red-500 focus:ring-1 focus:ring-red-200' 
            : 'border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-100 hover:border-gray-300'
          }
        `}
      />
      {error && (
        <p className="text-red-600 text-xs font-medium mt-1.5">{error}</p>
      )}
    </div>
  );
}