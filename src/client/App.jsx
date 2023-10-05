<<<<<<< Updated upstream
import { useState } from 'react';
import reactLogo from './assets/react.svg';
=======
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Cart from './components/Cart';
import ProductListing from './components/ProductListing.jsx';
import FeaturedProduct from './components/FeaturedProduct';
import Footer2 from './components/Footer2';
import Register from './routes/Register';
>>>>>>> Stashed changes
import Login from './components/Login';





function App() {
<<<<<<< Updated upstream
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
        <h1>Boilerplate</h1>
        <img id='comp-img' src='./computer.png'></img>
        <p>CAPSTONE</p>
        <Login />
    </div>
=======
  const [isSearching, setIsSearching] = useState(false);


  const handleSearch = (searchTerm) => {
    console.log(searchTerm)
    if (searchTerm != null) {

      setIsSearching(true)

    } else {

      setIsSearching(false)

    }
    const lowercasedSearchTerm = searchTerm.toLowerCase();
    const filteredPlayers = players.filter((players) => {
      return (
        players.name.toLowerCase().includes(lowercasedSearchTerm) ||
        players.breed.toLowerCase().includes(lowercasedSearchTerm)
      );
    });


    setFilteredPlayers(filteredPlayers);
    console.log()
  };





  return (
    <Router>
      <div className="App">
        {/* Header Component */}
        <Header />
        <Routes>
          <Route path="/cart" element={<Cart />} />
          {/* Cart Component */}
          <Route path="/featured" element={<FeaturedProduct />} />
          {/* Featured Product */}
          {/* <Route path="/" element={<HomePage />} /> */}
          {/* Home Page */}
          <Route path="/login" element={<Login />} />
          {/* You can include your home content here */}
          <Route path="/products" element={<ProductListing products={isSearching ? filteredProducts : products} />} />
          {/* Product Listing Component */}
          <Route path="/register" element={<Register />} />
        </Routes>
        {/* Footer Component */}
        <Footer2 />
      </div>
    </Router>
>>>>>>> Stashed changes
  );
}

export default App;
