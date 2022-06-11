import React, { useState,useRouteMatch } from "react";
import Products from "./component/Screen/Products/Products.jsx";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import OneProduct from "./component/Screen/OneProduct/OneProduct.jsx";
import Gallery from "./component/Gallery/Gallery.jsx"
import Navbar from "./component/Screen/Navbar/Navbar.jsx"
import {StateContext,history } from "./component/StateContext.js";
import Cart from "./component/Screen/Cart/Cart.jsx";


function App() {

  const [view, setView] = useState('false')
  const handleView =()=>{
    setView(!view)
  }

function ProductRoute() {
  const isProductRoute = useRouteMatch("/product/:Link");
  setView(!view)
}
  return (
    <StateContext>
    <Router>
      <div className='App'>
        <header className='App-header'>
          {/* <Link to='/'>Weed-Choco</Link> */}
          <Navbar />
        </header>
        <main>
        <Gallery  />
          <Routes>

             <Route  path="/" element={<Products />}/>
              <Route path="/cart" element={<Cart />}/>      
              <Route path="/product/:Link" element={<OneProduct />}/>
           

            
          </Routes>
          
        </main>
      </div>
    </Router>
    </StateContext>
  );
}

export default App;
