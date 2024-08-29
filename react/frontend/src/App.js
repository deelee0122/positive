import { Routes, Route } from "react-router-dom";
import Box from '@mui/material/Box';
import MainPage from "./components/MainPage";
import SubPage from "./components/SubPage";
import FitnessPage from "./components/FitnessPage";
import SPWPage from "./components/SPWPage";
import CategoryPage from "./components/CategoryPage";
import BeautyPage from "./components/BeautyPage";
import DIYPage from "./components/DIYPage";
import CookingPage from "./components/CookingPage";
import ProductPage from "./components/ProductPage";
import SignUpPage from "./components/SignUpPage";
import MyPage from "./components/Mypage";
import OrderPage from "./components/OrderPage";
import LoginForm from "./components/LoginForm";
import LoginMainPage from "./components/LoginMainPage";
import LoginMypage from "./components/LoginMypage";
import LogoutMainPage from "./components/LogoutMainPage";
import LogoutMypage from "./components/LogoutMypage";


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
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/order" element={<OrderPage/>} />
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/loginMain" element={<LoginMainPage/>} />
        <Route path="/loginMy" element={<LoginMypage/>} />
        <Route path="/logoutMain" element={<LogoutMainPage/>} />
        <Route path="/logoutMy" element={<LogoutMypage/>} /> 
      </Routes>
      

    </Box>
  );
}

export default App;
