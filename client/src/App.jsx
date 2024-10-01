import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ClassPage from "./pages/ClassPage";
import DetailsPage from "./pages/DetailsPage";
import TablePage from "./pages/TablePage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <div className="flex gap-3">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:role/:id" element={<DetailsPage />} />
          <Route path="/:role" element={<TablePage />} />
          <Route path="/class" element={<ClassPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
