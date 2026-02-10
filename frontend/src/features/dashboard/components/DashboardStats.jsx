export default function DashboardStats() {
  const stats = [
    {
      title: "Véhicules enregistrés",
      value: "1,247",
      icon: "🚗",
      change: "+12%",
      gradient: "from-blue-500 to-blue-600",
      lightBg: "bg-blue-100/50",
      textColor: "text-blue-600",
      changeColor: "text-green-500",
    },
    {
      title: "Modifications (mois)",
      value: "84",
      icon: "✏️",
      change: "+5%",
      gradient: "from-amber-500 to-amber-600",
      lightBg: "bg-amber-100/50",
      textColor: "text-amber-600",
      changeColor: "text-green-500",
    },
    {
      title: "Suppressions (mois)",
      value: "23",
      icon: "🗑️",
      change: "-2%",
      gradient: "from-red-500 to-red-600",
      lightBg: "bg-red-100/50",
      textColor: "text-red-600",
      changeColor: "text-orange-500",
    },
    {
      title: "En attente",
      value: "15",
      icon: "⏳",
      change: "0%",
      gradient: "from-purple-500 to-purple-600",
      lightBg: "bg-purple-100/50",
      textColor: "text-purple-600",
      changeColor: "text-gray-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 dashboard-slide-in border border-gray-100"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex items-center justify-between mb-6">
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center text-2xl shadow-lg`}>
              {stat.icon}
            </div>
            <span className={`text-xs font-bold px-3 py-1 rounded-full ${stat.lightBg} ${stat.changeColor}`}>
              {stat.change}
            </span>
          </div>
          <h3 className="text-gray-600 text-sm font-semibold mb-3 tracking-wide">{stat.title}</h3>
          <p className={`text-4xl font-black ${stat.textColor}`}>{stat.value}</p>
        </div>
      ))}
    </div>
  );
}
