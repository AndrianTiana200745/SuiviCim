import { BrowserRouter, Routes, Route } from "react-router-dom";

import ConnectionForm from "../features/auth/ConnectionForm";
import Dashboard from "../features/dashboard/Dashboard";
import DataEntryForm from "../features/data-entry/DataEntryForm";
import ModificationForm from "../features/modification/ModificationForm";
import DeleteDataForm from "../features/suppression/DeleteDataForm";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ConnectionForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/saisie" element={<DataEntryForm />} />
        <Route path="/modification" element={<ModificationForm />} />
        <Route path="/suppression" element={<DeleteDataForm />} />
      </Routes>
    </BrowserRouter>
  );
}
