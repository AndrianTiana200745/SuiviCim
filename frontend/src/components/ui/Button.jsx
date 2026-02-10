export default function Button({ 
  children, 
  variant = "primary", 
  disabled = false,
  isLoading = false,
  type = "submit",
  onClick = null,
  className = ""
}) {
  const baseStyles = "w-full font-semibold py-3 px-4 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-400 active:bg-blue-800",
    secondary: "bg-gray-100 hover:bg-gray-200 text-gray-900 focus:ring-gray-400",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-400"
  };

  return (
    <button 
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      disabled={disabled || isLoading}
    >
      {isLoading && (
        <svg className="spinner w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle
            className="spinner-circle"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      )}
      <span>{children}</span>
    </button>
  );
}