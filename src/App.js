import './App.css';
import Login from './pages/Login'
import MemberRegister from './pages/MemberRegister';
import MemberCenter from "./pages/MemberCenter"
import MenuPage from './pages/MenuPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import Header from './pages/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<MemberRegister />} />
        {/* <Route path="/MC" element={<MemberCenter />} /> */}
        <Route path="/MC" element={<MemberCenter />}>
          <Route path="/MC/MenuPage" element={<MenuPage />} />
        </Route>
        {/* <Route path="/MenuPage" element={<MenuPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
