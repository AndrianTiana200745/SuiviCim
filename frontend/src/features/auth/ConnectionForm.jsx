import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/ui/Input";
import Select from "../../components/ui/Select";
import Button from "../../components/ui/Button";
import { api } from "../../services/authService";
import "../../assets/styles/App.css";

export default function ConnectionForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    center: "",
  });

  const [centers, setCenters] = useState([]);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingCenters, setIsLoadingCenters] = useState(true);
  const [serverError, setServerError] = useState("");

  // 🔹 Charger les centres dynamiquement via service
  useEffect(() => {
    const fetchCenters = async () => {
      try {
        const data = await api.getCentre();
        setCenters(data);
      } catch (error) {
        console.error(error);
        setServerError("Erreur lors du chargement des centres");
      } finally {
        setIsLoadingCenters(false);
      }
    };

    fetchCenters();
  }, []);

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
    setServerError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.username) newErrors.username = "Identifiant requis";
    if (!formData.password) newErrors.password = "Mot de passe requis";
    if (!formData.center) newErrors.center = "Centre requis";

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    try {
      setIsLoading(true);

      // 🔥 utilisation du service
      const data = await api.login({
        nom: formData.username,
        motDePasse: formData.password,
        centreId: Number(formData.center),
      });

      // ✅ Sauvegarde token + user
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/dashboard");

    } catch (error) {
      setServerError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-blue-50 to-indigo-100">
      
      {(isLoading || isLoadingCenters) && (
        <div className="loading-overlay">
          <div className="loading-spinner-wrapper">
            <svg
              className="loading-spinner-large"
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
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
          
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-gray-800">Connexion</h1>
            <p className="mt-2 text-sm text-gray-500">
              Accédez à votre tableau de bord
            </p>
          </div>

          {serverError && (
            <div className="p-3 mb-4 text-sm text-red-600 bg-red-100 rounded-lg">
              {serverError}
            </div>
          )}

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
              options={centers.map((c) => ({
                value: c.id,
                label: c.designation,
              }))}
              error={errors.center}
            />

            <Button disabled={isLoading || isLoadingCenters}>
              {isLoading ? "Connexion..." : "Se connecter"}
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
