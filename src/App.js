import { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavigationHeader from './components/navigation/header/NavigationHeader';
import Home from './components/home/Home'
import NavigationFooter from './components/navigation/footer/NavigationFooter';
import BackGround from './components/common/BackGround';
import WebFont from "webfontloader";

function App() {
  useEffect(() => {
    WebFont.load({
        google: {
            families: ["Libre Baskerville", "Michroma", "Merienda", "Rajdhani", "Orbitron", "Satisfy", "Cinzel", "Prata"],
        },
    });
}, [])

  return (
    <BrowserRouter>
      <BackGround>
        <NavigationHeader />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <NavigationFooter />
      </BackGround>
    </BrowserRouter>
  );
}

export default App;
