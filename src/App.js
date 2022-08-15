
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css'
import {BrowserRouter,Routes,Route}  from 'react-router-dom'
import NavigationHeader from './components/navigation/header/NavigationHeader';

function App() {
  return (
    <BrowserRouter>
      <NavigationHeader/>
      <Routes>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
