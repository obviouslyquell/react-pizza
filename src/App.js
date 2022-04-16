import './App.css';
import Header from './Components/Header/Header';
import Cart from './Pages/Cart';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';


function App() {

  
  return (
    <div className="container">
      <Header/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;




