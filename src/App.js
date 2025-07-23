import './App.css';
import Login from './pages/Login'
import UserRegister from './pages/UserRegister';
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
        <Route path="/Register" element={<UserRegister />} />
      </Routes>
    </BrowserRouter>
  );
}
