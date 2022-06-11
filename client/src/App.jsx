import React from "react";
import Products from "./component/Screen/Products/Products.jsx";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import OneProduct from "./component/Screen/OneProduct/OneProduct.jsx";
import Gallery from "./component/Gallery/Gallery.jsx"
import Navbar from "./component/Screen/Navbar/Navbar.jsx"

function App() {
  
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          {/* <Link to='/'>Weed-Choco</Link> */}
          <Navbar />
        </header>
        <main>
          <Gallery  />
          <Routes>
            <Route path="/" element={<Products />}/>
            <Route path="/product/:Link" element={<OneProduct/>}/>
          </Routes>
          
        </main>
      </div>
    </Router>
  );
}

export default App;
