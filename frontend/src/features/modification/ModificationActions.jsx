import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";

export default function ModificationActions() {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col justify-end gap-4 pt-4 sm:flex-row">
      <Button 
        type="button"
        variant="secondary"
        onClick={handleCancel}
      >
        Annuler
      </Button>
      <Button type="submit">Valider</Button>
    </div>
  );
}

