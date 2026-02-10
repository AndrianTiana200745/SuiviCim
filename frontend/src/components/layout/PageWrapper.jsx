import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PageWrapper({ children, title, subtitle }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb Navigation */}
        <div className="mb-8 flex items-center gap-2 text-sm">
          <button onClick={() => window.history.back()} className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
            ← Retour
          </button>
        </div>

        {/* Main Content */}
        {children}
      </div>
    </div>
  );
}
