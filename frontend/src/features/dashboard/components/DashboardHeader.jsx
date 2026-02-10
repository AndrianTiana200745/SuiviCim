import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo.jpg";

export default function DashboardHeader({ 
  userInfo, 
  selectedCenter, 
  onCenterChange, 
  centers, 
  onLogout, 
  onMenuClick 
}) {
  const [showCenterDropdown, setShowCenterDropdown] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const dropdownRef = useRef(null);
  const userMenuRef = useRef(null);
  const navigate = useNavigate();

  const handleCenterSelect = (centerName) => {
    onCenterChange(centerName);
    setShowCenterDropdown(false);
  };

  // Fermer les menus quand on clique ailleurs
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowCenterDropdown(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b shadow-md border-gray-100/60 bg-gradient-to-br from-white via-slate-50/40 to-white backdrop-blur-xl bg-opacity-98">
      <div className="flex items-center justify-between gap-3 px-4 py-2.5 md:px-8 md:py-3.5">
        
        {/* Left: Logo & Menu */}
        <div className="flex items-center gap-2 md:gap-3">
          <button
            onClick={onMenuClick}
            className="p-2 text-gray-700 transition-all duration-300 rounded-lg hover:bg-gradient-to-br hover:from-blue-100 hover:to-blue-50 hover:text-blue-600 active:scale-90"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          <div className="items-center hidden gap-2 pl-2.5 border-l border-gray-200/60 md:flex md:gap-2.5">
            <div className="p-1.5 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg">
              <img src={logo} alt="CIM" className="object-contain w-8 h-8 md:w-9 md:h-9" />
            </div>
            <div>
              <h1 className="text-xs font-black tracking-wider text-gray-900 md:text-sm">CIM</h1>
              <p className="text-xs font-medium text-gray-500">Suivi CIM</p>
            </div>
          </div>
        </div>

        {/* Center: Centre Selector (Desktop Only) */}
        <div className="hidden lg:flex">
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setShowCenterDropdown(!showCenterDropdown)}
              className="flex items-center gap-2 px-3.5 py-2 text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-blue-500 via-blue-550 to-blue-600 hover:from-blue-600 hover:via-blue-650 hover:to-blue-700 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 group backdrop-blur-sm border border-blue-400/30"
            >
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L9 4.414V16a1 1 0 102 0V4.414l6.293 6.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                <div className="text-left">
                  <p className="text-xs font-semibold leading-tight">Centre</p>
                  <p className="text-sm font-bold leading-tight">{selectedCenter}</p>
                </div>
              </div>
              <svg className={`w-4 h-4 ml-1 transition-transform duration-300 ${showCenterDropdown ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown */}
            {showCenterDropdown && (
              <div className="absolute left-0 z-50 mt-2.5 overflow-hidden bg-white border shadow-2xl top-full w-80 border-gray-200/60 rounded-xl dropdown-slide-down">
                <div className="p-2.5">
                  <div className="px-4 py-3 mb-2 border-b rounded-lg border-gray-100/80 bg-gradient-to-r from-blue-50/50 to-slate-50/50">
                    <p className="text-xs font-bold tracking-widest text-gray-700 uppercase">🏢 Centres disponibles</p>
                  </div>
                  <div className="space-y-1">
                    {centers.map((center) => (
                      <button
                        key={center.id}
                        onClick={() => handleCenterSelect(center.name)}
                        className={`w-full text-left px-4 py-2.5 rounded-lg transition-all duration-200 flex items-center justify-between group font-medium ${
                          selectedCenter === center.name
                            ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md scale-100"
                            : "text-gray-700 hover:bg-blue-50/60 hover:text-blue-700 hover:translate-x-1"
                        }`}
                      >
                        <div className="flex-1">
                          <p className="text-sm font-semibold">{center.name}</p>
                          <p className={`text-xs mt-0.5 ${selectedCenter === center.name ? "text-blue-100" : "text-gray-500"}`}>
                            {center.location}
                          </p>
                        </div>
                        {selectedCenter === center.name && (
                          <svg className="w-4 h-4 ml-2 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right: Notifications & User Menu */}
        <div className="flex items-center gap-1 md:gap-2">
          
          {/* Notifications */}
          <button className="relative p-2 text-gray-700 transition-all duration-300 rounded-lg hover:bg-gradient-to-br hover:from-blue-100/60 hover:to-blue-50/60 hover:text-blue-600 active:scale-90">
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute w-2 h-2 bg-red-500 rounded-full shadow-lg top-2 right-2 animate-pulse shadow-red-500/50"></span>
          </button>

          {/* User Menu Dropdown */}
          <div className="relative" ref={userMenuRef}>
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center gap-2 px-2 py-1 md:px-3 md:py-1.5 text-gray-700 transition-all duration-300 rounded-lg hover:bg-blue-50/70 active:scale-90 group"
            >
              <div className="flex items-center justify-center w-8 h-8 font-bold text-white transition-all duration-300 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 group-hover:shadow-md group-hover:scale-110">
                {userInfo.name.charAt(0)}
              </div>
              <div className="hidden text-right sm:block">
                <p className="text-sm font-semibold leading-tight text-gray-800">{userInfo.name.split(" ")[0]}</p>
                <p className="text-xs text-gray-500">{userInfo.role}</p>
              </div>
              <svg className={`w-4 h-4 text-gray-500 transition-all duration-300 hidden md:block ${showUserMenu ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* User Dropdown Menu */}
            {showUserMenu && (
              <div className="absolute right-0 z-50 w-60 mt-2.5 overflow-hidden bg-white border shadow-2xl top-full border-gray-200/60 rounded-xl dropdown-slide-down">
                <div className="p-3">
                  <div className="px-3 py-3 mb-2 border-b rounded-lg border-gray-100/80 bg-gradient-to-r from-blue-50/50 to-slate-50/50">
                    <p className="text-sm font-bold text-gray-900">{userInfo.name}</p>
                    <p className="mt-1 text-xs text-gray-600">{userInfo.role}</p>
                  </div>
                  <div className="space-y-0.5">
                    <button className="w-full px-3 py-2.5 text-sm font-medium text-left text-gray-700 transition-all duration-200 rounded-lg hover:bg-blue-50/60 hover:text-blue-700 hover:translate-x-1">
                      ⚙️ Paramètres
                    </button>
                    <button className="w-full px-3 py-2.5 text-sm font-medium text-left text-gray-700 transition-all duration-200 rounded-lg hover:bg-blue-50/60 hover:text-blue-700 hover:translate-x-1">
                      👤 Mon profil
                    </button>
                    <div className="my-1.5 border-t border-gray-100/80"></div>
                    <button
                      onClick={onLogout}
                      className="w-full px-3 py-2.5 text-sm font-medium text-left text-red-600 transition-all duration-200 rounded-lg hover:bg-red-50/60 hover:translate-x-1"
                    >
                      🚪 Déconnexion
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Centre Selector */}
        <div className="lg:hidden">
          <select
            value={selectedCenter}
            onChange={(e) => onCenterChange(e.target.value)}
            className="px-2.5 py-1.5 text-xs font-semibold text-blue-700 border border-blue-300/60 rounded-lg bg-blue-50/80 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 cursor-pointer transition-all duration-200"
          >
            {centers.map((center) => (
              <option key={center.id} value={center.name}>
                {center.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <style>{`
        .dropdown-slide-down {
          animation: slideDown 0.35s cubic-bezier(0.32, 0.72, 0.3, 1) forwards;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0%, 100% {
            background-position: -1000px 0;
          }
          50% {
            background-position: 1000px 0;
          }
        }

        button:active {
          transform: scale(0.98);
        }

        select:focus {
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
      `}</style>
    </header>
  );
} 
