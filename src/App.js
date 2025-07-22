import './App.css';
import Login from './pages/Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import Header from './components/Header';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
      </div>
           
      <Routes>
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
