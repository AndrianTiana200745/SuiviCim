import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardHeader from "./components/DashboardHeader";
import DashboardSidebar from "./components/DashboardSidebar";
import DashboardStats from "./components/DashboardStats";
import DashboardCards from "./components/DashboardCards";
import "../../assets/styles/dashboard.css";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const [selectedCenter, setSelectedCenter] = useState("Ambohidahy");
  const [userInfo] = useState({
    name: "Admin User",
    role: "Administrateur"
  });

  const centers = [
    { id: 1, name: "Ambohidahy", location: "Antananarivo" },
    { id: 2, name: "Ankadibahoaka", location: "Antananarivo" },
    { id: 3, name: "Antsirabe", location: "Vakinankaratra" }
  ];

  const handleLogout = () => {
    navigate("/");
  };

  const handleCenterChange = (center) => {
    setSelectedCenter(center);
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Sidebar */}
      <DashboardSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header */}
        <DashboardHeader
          userInfo={userInfo}
          selectedCenter={selectedCenter}
          onCenterChange={handleCenterChange}
          centers={centers}
          onLogout={handleLogout}
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
        />

        {/* Content Area */}
        <main className="flex-1 p-4 md:p-8 overflow-auto bg-gradient-to-b from-slate-50 to-blue-50">
          {/* Welcome Section */}
          <div className="mb-8 dashboard-fade-in">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Bienvenue, {userInfo.name} 👋
                </h1>
                <p className="mt-3 text-gray-600 flex items-center gap-2">
                  <span className="text-xl">📍</span>
                  Centre actif: <span className="font-bold text-blue-600">{selectedCenter}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <DashboardStats />

          {/* Cards Section */}
          <div className="mt-12">
            <h2 className="mb-6 text-3xl font-black text-gray-800">Actions rapides</h2>
            <DashboardCards />
          </div>
        </main>
      </div>
    </div>
  );
}
