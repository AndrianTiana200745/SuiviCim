import { useNavigate } from "react-router-dom";

export default function DashboardCards() {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Nouvelle saisie",
      description: "Enregistrer un nouveau véhicule",
      icon: "➕",
      color: "from-blue-400 to-blue-600",
      action: () => navigate("/saisie"),
      bgColor: "bg-blue-50 hover:bg-blue-100",
    },
    {
      title: "Modification",
      description: "Modifier les données existantes",
      icon: "✏️",
      color: "from-amber-400 to-amber-600",
      action: () => navigate("/modification"),
      bgColor: "bg-amber-50 hover:bg-amber-100",
    },
    {
      title: "Suppression",
      description: "Supprimer un enregistrement",
      icon: "🗑️",
      color: "from-red-400 to-red-600",
      action: () => navigate("/suppression"),
      bgColor: "bg-red-50 hover:bg-red-100",
    },
    {
      title: "Statistiques",
      description: "Voir les rapports et statistiques",
      icon: "📊",
      color: "from-green-400 to-green-600",
      action: () => alert("Statistiques - À venir"),
      bgColor: "bg-green-50 hover:bg-green-100",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {cards.map((card, index) => (
        <button
          key={index}
          onClick={card.action}
          className="bg-white rounded-2xl p-6 md:p-8 text-left transition-all duration-300 transform hover:scale-105 hover:shadow-2xl dashboard-slide-in border border-gray-100 group relative overflow-hidden"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br from-blue-400 to-purple-600"></div>
          
          <div className="relative z-10">
            <div
              className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center text-3xl mb-5 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}
            >
              {card.icon}
            </div>
            <h3 className="text-lg md:text-xl font-black text-gray-800 mb-3">{card.title}</h3>
            <p className="text-sm text-gray-600 mb-5 line-clamp-2">{card.description}</p>
            <div className="inline-flex items-center gap-2 text-sm font-bold text-white bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-2 rounded-lg group-hover:shadow-lg transition-all duration-300">
              Accéder <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
