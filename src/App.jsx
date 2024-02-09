import "./App.css";
import ReportForm from "./components/ReportForm";
import { Routes, Route } from "react-router-dom";
import Table from "./components/Table";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ReportForm />} />
        <Route path="/table" element={<Table />} />
        <Route path="*" element={<ReportForm />} />
      </Routes>
    </>
  );
}

export default App;
