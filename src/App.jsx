import MainForm from "./components/MainForm";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BulkUpload from "./components/pages/BulkUpload";
import ConvertTo from "./components/pages/ConvertTo";
import Merge from "./components/pages/Merge";
import About from "./components/pages/About";
import Layout from "./components/layout/layout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainForm />} />
            <Route path="bulk" element={<BulkUpload />} />
            <Route path="convert" element={<ConvertTo />} />
            <Route path="merge" element={<Merge />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
