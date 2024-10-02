import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import DetailsPage from "./pages/DetailsPage";
import ContentPage from "./pages/ContentPage";
import HomePage from "./pages/HomePage";
import AddPersonForm from "./pages/AddPersonForm";

function App() {
  return (
    <BrowserRouter>
      <div className="flex gap-3">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:role/:id" element={<DetailsPage />} />
          <Route path="/:role/create" element={<AddPersonForm />} />
          <Route path="/:role" element={<ContentPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
