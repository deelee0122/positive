import { Routes, Route } from "react-router-dom";
import Box from '@mui/material/Box';
import MainPage from "./pages/MainPage";
import SubPage from "./pages/SubPage";
import SPWPage from "./pages/SPWPage";
import FitnessPage from "./pages/categoryPages/FitnessPage";
import CategoryPage from "./pages/categoryPages/CategoryPage";
import BeautyPage from "./pages/categoryPages/BeautyPage";
import DIYPage from "./pages/categoryPages/DIYPage";
import CookingPage from "./pages/categoryPages/CookingPage";
import ProductPage from "./pages/ProductPage";


function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/user" element={<SubPage />} />
        <Route path="/fitness" element={<FitnessPage />} />
        <Route path="/findpassword" element={<SPWPage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/beauty" element={<BeautyPage />} />
        <Route path="/diy" element={<DIYPage />} />
        <Route path="/cooking" element={<CookingPage />} />
        <Route path="/productpage" element={<ProductPage />} />
        
      </Routes>
      

    </Box>
  );
}

export default App;
