import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/ui/Input";
import Select from "../../components/ui/Select";
import Button from "../../components/ui/Button";
import logo from "../../assets/images/logo.jpg";
import "../../assets/styles/App.css";

export default function ConnectionForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    center: "",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.username) newErrors.username = "Identifiant requis";
    if (!formData.password) newErrors.password = "Mot de passe requis";
    if (!formData.center) newErrors.center = "Centre requis";

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      console.log("Connexion :", formData);
      navigate("/dashboard");
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Loading Overlay */}
      {isLoading && (
        <div className="loading-overlay">
          <div className="loading-spinner-wrapper">
            <svg
              className="loading-spinner-large"
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="40"
                cy="40"
                r="35"
                stroke="#3B82F6"
                strokeWidth="3"
              />
            </svg>
          </div>
        </div>
      )}

      <div className="w-full max-w-md">
        <div className="p-8 bg-white shadow-xl rounded-2xl">
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="w-24 h-24 mx-auto mb-6 logo-container">
              <img src={logo} alt="CIM Logo" className="object-contain w-20 h-20 logo-animate" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800">Connexion</h1>
            <p className="mt-2 text-sm text-gray-500">Accédez à votre tableau de bord</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 form-container">
            <Input
              label="Identifiant"
              value={formData.username}
              onChange={handleChange("username")}
              error={errors.username}
            />

            <Input
              label="Mot de passe"
              type="password"
              value={formData.password}
              onChange={handleChange("password")}
              error={errors.password}
            />

            <Select
              label="Centre"
              value={formData.center}
              onChange={handleChange("center")}
              options={["Ambohidahy", "Ankadibahoaka", "Antsirabe"]}
              error={errors.center}
            />

            <Button disabled={isLoading} isLoading={false}>
              Se connecter
            </Button>
          </form>
        </div>

        <p className="mt-6 text-xs text-center text-gray-400">
          © 2026 Tous droits réservés
        </p>
      </div>
    </div>
  );
}

