import './App.css';
import Header from './Components/Header/Header';
import Cart from './Pages/Cart';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import React from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import {setPizzas} from './redux/actions/pizzas'

function App() {
  //const [items, setItems] = React.useState([]);
  const dispatch = useDispatch();
  React.useEffect(()=>{
    axios.get('https://625b2a1f398f3bc782aa7ec9.mockapi.io/pizzas').then(({data})=>{
      dispatch(setPizzas(data)); console.log(data)
    })
  }, []);
  console.log('res')
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




