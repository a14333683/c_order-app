import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import Header from './components/Header';
import AllPart from './components/HeroSection'

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div>
          <AllPart />
        </div>
      </div>
           
      {/* <Routes>
        <Route path="/登入" element={<Login />} />
      </Routes> */}
    </BrowserRouter>
  );
}
