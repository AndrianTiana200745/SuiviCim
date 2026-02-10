import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/ui/Input";
import Select from "../../components/ui/Select";
import Button from "../../components/ui/Button";
import FormGroup from "../../components/ui/FormGroup";
import Textarea from "../../components/ui/Textarea";
import "../../assets/styles/data-entry.css";

export default function DataEntryForm() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState({
    operationType: "",
    reference: "",
    vehicleNumber: "",
    newVehicleNumber: "",
    paymentDate: "",
    appointmentDate: "",
    presentedBy: "",
    observation: "",
  });

  const handleChange = (field) => (e) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setSuccessMessage("Données enregistrées avec succès! ✓");
      setIsSubmitting(false);

      setTimeout(() => {
        setSuccessMessage("");
        setFormData({
          operationType: "",
          reference: "",
          vehicleNumber: "",
          newVehicleNumber: "",
          paymentDate: "",
          appointmentDate: "",
          presentedBy: "",
          observation: "",
        });
      }, 2000);
    }, 1500);
  };

  const handleCancel = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen p-4 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Success Message */}
        {successMessage && (
          <div className="p-4 mb-6 text-white shadow-lg rounded-xl bg-gradient-to-r from-green-400 to-green-500 animate-bounce-in">
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">{successMessage}</span>
            </div>
          </div>
        )}

        {/* Main Form Card */}
        <div className="overflow-hidden bg-white shadow-2xl rounded-3xl form-fade-in">
          {/* Header avec dégradé */}
          <div className="p-8 text-white bg-gradient-to-r from-blue-600 to-blue-800 md:p-12">
            <h2 className="mb-2 text-3xl font-black md:text-4xl">
              Saisie des données
            </h2>
            <p className="text-lg text-blue-100">
              Veuillez renseigner les informations ci-dessous pour enregistrer un nouveau véhicule
            </p>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="p-8 space-y-8 md:p-12">
            
            {/* Section 1 : Type & Référence */}
            <div className="space-y-6 form-section" style={{ "--animation-delay": "0.1s" }}>
              <h3 className="flex items-center gap-3 text-lg font-black text-gray-800">
                <span className="flex items-center justify-center w-8 h-8 text-sm font-bold text-white rounded-full bg-gradient-to-br from-blue-500 to-blue-600">1</span>
                Type d'opération
              </h3>

              <Select
                label="Type d'opération"
                value={formData.operationType}
                onChange={handleChange("operationType")}
                options={[
                  "Immatriculation",
                  "Immatriculation / Mutation",
                  "Mutation",
                ]}
              />

              <Input
                label="Référence"
                placeholder="Ex : REF-2026-001"
                value={formData.reference}
                onChange={handleChange("reference")}
              />
            </div>

            {/* Section 2 : Véhicule */}
            <div className="space-y-6 form-section" style={{ "--animation-delay": "0.2s" }}>
              <h3 className="flex items-center gap-3 text-lg font-black text-gray-800">
                <span className="flex items-center justify-center w-8 h-8 text-sm font-bold text-white rounded-full bg-gradient-to-br from-amber-500 to-amber-600">2</span>
                Informations du véhicule
              </h3>

              <div className="p-6 border bg-gradient-to-br from-amber-50/50 to-orange-50/50 rounded-2xl border-amber-100/50">
                <FormGroup>
                  <Input
                    label="Numéro du véhicule"
                    placeholder="Ex : 1234 TAA"
                    value={formData.vehicleNumber}
                    onChange={handleChange("vehicleNumber")}
                  />
                  <Input
                    label="Nouveau numéro"
                    placeholder="Ex : 5678 TAB"
                    value={formData.newVehicleNumber}
                    onChange={handleChange("newVehicleNumber")}
                  />
                </FormGroup>
              </div>
            </div>

            {/* Section 3 : Dates */}
            <div className="space-y-6 form-section" style={{ "--animation-delay": "0.3s" }}>
              <h3 className="flex items-center gap-3 text-lg font-black text-gray-800">
                <span className="flex items-center justify-center w-8 h-8 text-sm font-bold text-white rounded-full bg-gradient-to-br from-green-500 to-green-600">3</span>
                Dates importantes
              </h3>

              <div className="p-6 border bg-gradient-to-br from-green-50/50 to-emerald-50/50 rounded-2xl border-green-100/50">
                <FormGroup>
                  <Input
                    type="date"
                    label="Date de paiement"
                    value={formData.paymentDate}
                    onChange={handleChange("paymentDate")}
                  />
                  <Input
                    type="date"
                    label="Date de rendez-vous"
                    value={formData.appointmentDate}
                    onChange={handleChange("appointmentDate")}
                  />
                </FormGroup>
              </div>
            </div>

            {/* Section 4 : Autres infos */}
            <div className="space-y-6 form-section" style={{ "--animation-delay": "0.4s" }}>
              <h3 className="flex items-center gap-3 text-lg font-black text-gray-800">
                <span className="flex items-center justify-center w-8 h-8 text-sm font-bold text-white rounded-full bg-gradient-to-br from-purple-500 to-purple-600">4</span>
                Informations supplémentaires
              </h3>

              <Input
                label="Présenté par"
                placeholder="Nom et prénom"
                value={formData.presentedBy}
                onChange={handleChange("presentedBy")}
              />

              <Textarea
                label="Observation"
                rows={5}
                placeholder="Ajoutez une observation si nécessaire..."
                value={formData.observation}
                onChange={handleChange("observation")}
              />
            </div>

            {/* Actions */}
            <div className="flex flex-col justify-end gap-4 pt-8 border-t border-gray-200 sm:flex-row form-section" style={{ "--animation-delay": "0.5s" }}>
              <Button
                type="button"
                variant="secondary"
                onClick={handleCancel}
                className="px-8 py-3 font-semibold"
              >
                Annuler
              </Button>

              <Button
                type="submit"
                disabled={isSubmitting}
                isLoading={isSubmitting}
                className="px-10 py-3 font-semibold text-white transition-all shadow-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl"
              >
                {isSubmitting ? "Enregistrement..." : "Valider"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

