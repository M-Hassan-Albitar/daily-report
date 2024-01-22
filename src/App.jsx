import "./App.css";
import ReportForm from "./components/ReportForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Table from "./components/Table";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ReportForm />} />
          <Route path="/table" element={<Table />} />
          <Route path="*" element={<ReportForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
