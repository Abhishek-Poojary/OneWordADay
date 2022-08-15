
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css'
import {BrowserRouter,Routes,Route}  from 'react-router-dom'
import NavigationHeader from './components/navigation/header/NavigationHeader';
import Home from './components/home/Home'
import NavigationFooter from './components/navigation/footer/NavigationFooter';

function App() {
  return (
    <BrowserRouter>
      <NavigationHeader/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <NavigationFooter/>
    </BrowserRouter>
  );
}

export default App;
