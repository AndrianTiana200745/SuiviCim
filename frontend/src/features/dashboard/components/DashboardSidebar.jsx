import { useNavigate } from "react-router-dom";

export default function DashboardSidebar({ isOpen, onClose }) {
  const navigate = useNavigate();

  const menuItems = [
    { label: "Tableau de bord", icon: "📊", path: "/dashboard" },
    { label: "Nouvelle saisie", icon: "➕", path: "/saisie" },
    { label: "Modification", icon: "✏️", path: "/modification" },
    { label: "Suppression", icon: "🗑️", path: "/suppression" },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static w-64 h-screen bg-gradient-to-b from-slate-800 via-blue-800 to-slate-900 text-white transform transition-transform duration-300 ease-in-out md:translate-x-0 z-50 shadow-2xl ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-black">Menu</h2>
            {/* Close Button Mobile */}
            <button
              onClick={onClose}
              className="md:hidden p-2 hover:bg-blue-700/50 rounded-lg transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <nav className="space-y-2 flex-1">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  navigate(item.path);
                  onClose();
                }}
                className="w-full text-left px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center gap-4 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-white/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="text-2xl">{item.icon}</span>
                <span className="font-semibold text-base">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Divider */}
          <div className="my-6 h-px bg-gradient-to-r from-blue-600/0 via-blue-400/50 to-blue-600/0"></div>

          {/* Footer Info */}
          <div className="p-4 rounded-xl bg-gradient-to-br from-blue-900/50 to-blue-800/50 border border-blue-700/50">
            <p className="text-sm font-bold text-white">CIM</p>
            <p className="text-xs text-blue-200 mt-1 leading-relaxed">Centre Immatriculateur de Madagascar</p>
            <p className="text-xs text-blue-300 mt-3 font-medium">© 2026</p>
          </div>
        </div>
      </aside>
    </>
  );
}
