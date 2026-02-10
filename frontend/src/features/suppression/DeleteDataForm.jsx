import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/ui/Input";
import Select from "../../components/ui/Select";
import Textarea from "../../components/ui/Textarea";
import Button from "../../components/ui/Button";
import FormGroup from "../../components/ui/FormGroup";
import "../../assets/styles/deletion.css";

export default function DeleteDataForm() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
  const [formData, setFormData] = useState({
    reference: "",
    newVehicleNumber: "",
    vehicleNumber: "",
    paymentDate: "",
    operator: "",
    appointmentDate: "",
    responsible: "",
    printDate: "",
    etat: "",
    deliveryDate: "",
    stateDate: "",
    arrivalDate: "",
    presentedBy: "",
    observation: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field) => (e) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
    setErrors(prev => ({ ...prev, [field]: "" }));
  };

  const handleCancel = () => {
    navigate("/dashboard");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.reference || !formData.observation) {
      setErrors({
        reference: !formData.reference ? "Référence requise" : "",
        observation: !formData.observation ? "Observation requise" : "",
      });
      return;
    }

    setShowConfirm(true);
  };

  const confirmDelete = () => {
    setIsSubmitting(true);

    setTimeout(() => {
      setSuccessMessage("Données supprimées avec succès! ✓");
      setShowConfirm(false);
      setIsSubmitting(false);

      setTimeout(() => {
        setSuccessMessage("");
        setFormData({
          reference: "",
          newVehicleNumber: "",
          vehicleNumber: "",
          paymentDate: "",
          operator: "",
          appointmentDate: "",
          responsible: "",
          printDate: "",
          etat: "",
          deliveryDate: "",
          stateDate: "",
          arrivalDate: "",
          presentedBy: "",
          observation: "",
        });
      }, 2000);
    }, 1500);
  };

  return (
    <div className="min-h-screen p-4 bg-gradient-to-br from-slate-50 via-red-50 to-slate-50 md:p-8">
      <div className="max-w-5xl mx-auto">
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

        {/* Confirmation Modal */}
        {showConfirm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm modal-fade-in">
            <div className="w-full max-w-md p-8 bg-white shadow-2xl rounded-3xl modal-scale-in">
              <div className="flex justify-center mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4v2m0 -6a9 9 0 110-18 9 9 0 010 18zm0-14h.01" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-2 text-2xl font-black text-center text-gray-800">
                Confirmer la suppression?
              </h3>
              <p className="mb-6 text-center text-gray-600">
                Cette action est <span className="font-bold">irréversible</span>. Les données seront supprimées définitivement.
              </p>
              <div className="p-4 mb-6 border border-red-200 bg-red-50 rounded-xl">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Référence:</span> {formData.reference}
                </p>
              </div>
              <div className="flex gap-4">
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => setShowConfirm(false)}
                  className="flex-1"
                >
                  Annuler
                </Button>
                <Button
                  type="button"
                  onClick={confirmDelete}
                  disabled={isSubmitting}
                  isLoading={isSubmitting}
                  className="flex-1 text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800"
                >
                  {isSubmitting ? "Suppression..." : "Supprimer"}
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Main Form Card */}
        <div className="overflow-hidden bg-white shadow-2xl rounded-3xl form-fade-in">
          {/* Header avec dégradé */}
          <div className="p-8 text-white bg-gradient-to-r from-red-600 to-red-800 md:p-12">
            <h2 className="mb-2 text-3xl font-black md:text-4xl">
              Suppression des données
            </h2>
            <p className="text-lg text-red-100">
              Vérifiez attentivement les informations avant de valider la suppression
            </p>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="p-8 space-y-8 md:p-12">
            
            {/* Section 1 : Identification */}
            <div className="space-y-6 form-section" style={{ "--animation-delay": "0.1s" }}>
              <h3 className="flex items-center gap-3 text-lg font-black text-gray-800">
                <span className="flex items-center justify-center w-8 h-8 text-sm font-bold text-white rounded-full bg-gradient-to-br from-red-600 to-red-700">1</span>
                Identification
              </h3>

              <div className="p-6 border bg-gradient-to-br from-red-50/50 to-orange-50/50 rounded-2xl border-red-100/50">
                <Input
                  label="Référence *"
                  placeholder="Référence de la donnée à supprimer"
                  value={formData.reference}
                  onChange={handleChange("reference")}
                  error={errors.reference}
                />
              </div>
            </div>

            {/* Section 2 : Informations du véhicule */}
            <div className="space-y-6 form-section" style={{ "--animation-delay": "0.2s" }}>
              <h3 className="flex items-center gap-3 text-lg font-black text-gray-800">
                <span className="flex items-center justify-center w-8 h-8 text-sm font-bold text-white rounded-full bg-gradient-to-br from-amber-600 to-amber-700">2</span>
                Informations du véhicule
              </h3>

              <div className="p-6 border bg-gradient-to-br from-amber-50/50 to-orange-50/50 rounded-2xl border-amber-100/50">
                <FormGroup>
                  <Input 
                    label="Nouveau numéro"
                    value={formData.newVehicleNumber}
                    onChange={handleChange("newVehicleNumber")}
                  />
                  <Input 
                    label="Numéro du véhicule"
                    value={formData.vehicleNumber}
                    onChange={handleChange("vehicleNumber")}
                  />
                </FormGroup>

                <FormGroup className="mt-6">
                  <Input 
                    type="date" 
                    label="Date de paiement"
                    value={formData.paymentDate}
                    onChange={handleChange("paymentDate")}
                  />
                  <Input 
                    label="Opérateur de saisie"
                    value={formData.operator}
                    onChange={handleChange("operator")}
                  />
                </FormGroup>
              </div>
            </div>

            {/* Section 3 : Dates */}
            <div className="space-y-6 form-section" style={{ "--animation-delay": "0.3s" }}>
              <h3 className="flex items-center gap-3 text-lg font-black text-gray-800">
                <span className="flex items-center justify-center w-8 h-8 text-sm font-bold text-white rounded-full bg-gradient-to-br from-blue-600 to-blue-700">3</span>
                Dates importantes
              </h3>

              <div className="p-6 border bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-2xl border-blue-100/50">
                <FormGroup>
                  <Input 
                    type="date" 
                    label="Date de rendez-vous"
                    value={formData.appointmentDate}
                    onChange={handleChange("appointmentDate")}
                  />
                  <Input 
                    label="Responsable du véhicule"
                    value={formData.responsible}
                    onChange={handleChange("responsible")}
                  />
                </FormGroup>

                <FormGroup className="mt-6">
                  <Input 
                    type="date" 
                    label="Date d'impression"
                    value={formData.printDate}
                    onChange={handleChange("printDate")}
                  />
                  <Select
                    label="État"
                    value={formData.etat}
                    onChange={handleChange("etat")}
                    options={["Traité", "Rejeté"]}
                  />
                </FormGroup>

                <FormGroup className="mt-6">
                  <Input 
                    type="date" 
                    label="Date de livraison"
                    value={formData.deliveryDate}
                    onChange={handleChange("deliveryDate")}
                  />
                  <Input 
                    type="date" 
                    label="Date de l'état"
                    value={formData.stateDate}
                    onChange={handleChange("stateDate")}
                  />
                </FormGroup>

                <FormGroup className="mt-6">
                  <Input 
                    type="date" 
                    label="Arrivée en protocole"
                    value={formData.arrivalDate}
                    onChange={handleChange("arrivalDate")}
                  />
                  <Input 
                    label="Présenté par"
                    value={formData.presentedBy}
                    onChange={handleChange("presentedBy")}
                  />
                </FormGroup>
              </div>
            </div>

            {/* Section 4 : Raison de suppression */}
            <div className="space-y-6 form-section" style={{ "--animation-delay": "0.4s" }}>
              <h3 className="flex items-center gap-3 text-lg font-black text-gray-800">
                <span className="flex items-center justify-center w-8 h-8 text-sm font-bold text-white rounded-full bg-gradient-to-br from-green-600 to-green-700">4</span>
                Raison de suppression
              </h3>

              <Textarea
                label="Observation *"
                rows={5}
                placeholder="Expliquez la raison de cette suppression..."
                value={formData.observation}
                onChange={handleChange("observation")}
                error={errors.observation}
              />

              <div className="p-4 border border-l-4 border-red-200 rounded-xl bg-red-50">
                <p className="text-sm text-red-800">
                  <span className="font-bold">⚠️ Attention:</span> Cette suppression est irréversible. Assurez-vous que cette action est justifiée.
                </p>
              </div>
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
                className="px-10 py-3 font-semibold text-white transition-all shadow-lg bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 hover:shadow-xl"
              >
                Supprimer
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
