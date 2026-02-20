export default function Select({ 
  label, 
  options, 
  value,
  onChange,
  error
}) {
  return (
    <div className="mb-1">
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {label}
      </label>

      <div className="relative">
        <select
          value={value}
          onChange={onChange}
          className={`
            w-full px-4 py-3 pr-10 rounded-lg border-2 font-medium
            bg-white appearance-none cursor-pointer
            transition-all duration-200
            focus:outline-none
            ${error 
              ? 'border-red-300 focus:border-red-500 focus:ring-1 focus:ring-red-200' 
              : 'border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-100 hover:border-gray-300'
            }
          `}
        >
          <option value="" disabled>
            — Sélectionner —
          </option>

          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {error && (
        <p className="text-red-600 text-xs font-medium mt-1.5">
          {error}
        </p>
      )}
    </div>
  );
}