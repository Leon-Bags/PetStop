import React from 'react';
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Cart from './components/Cart';
import ProductListing from './components/ProductListing.jsx';
import FeaturedProduct from './components/FeaturedProduct';
import Footer2 from './components/Footer2';
import Register from './routes/Register';
import Login from './components/Login';

import Homepage from './components/Homepage';
import SingleProduct from './components/SingleProduct';
import AdminRegister from './components/AdminRegister';
import Reviews from './components/ReviewList';
import Users from './components/Users';
import AddProduct from './components/AddProduct';
import Profile from './routes/Profile';
import fetchProducts from './api/ProductsAjaxHelper';
import Checkout from './components/Checkout';
import { updateCart } from './api/CartsAjaxHelper';


function App() {

  const [token, setToken] = useState(window.localStorage.getItem("token"));
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(null);
  const [cartId, setCartId] = useState(null);
  const [userId, setUserId] = useState(null);

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const addToCart = (product) => {
    // Check if there's a cart
    if (cart === null) {
      return;
    }
    // Check if there are products in the cart
    if (cart.products === null) {
      const cartObj = {
        id: cartId,
        products: [product],
        userId: userId
      }
      setCart(cartObj);
      _updateCart(cartObj);
      return;
    }
    // Check if the product is already in the cart
    const existingProductIndex = cart.products.findIndex((item) => item.id === product.id);
    if (existingProductIndex !== -1) {
      // If the product is already in the cart, update its quantity
      const updatedCart = [...cart.products];
      if (updatedCart[existingProductIndex].amount === null) {
        updatedCart[existingProductIndex].amount = 0;
      }
      updatedCart[existingProductIndex].amount += 1;
      const cartObj = {
        id: cart.id,
        products: updatedCart,
        userId: userId
      }
      setCart(cartObj);
      _updateCart(cartObj);
    } else {
      // If the product is not in the cart, add it with a quantity of 1
      const updatedCart = [...cart.products, { ...product, amount: 1 }];
      const cartObj = {
        id: cart.id,
        products: updatedCart,
        userId: userId
      }
      setCart(cartObj);
      _updateCart(cartObj);
      console.log("updatedCart", cartObj);
    }
  }

  const _updateCart = async (cartObj) => {

    await updateCart(token, cartObj);

  }

  const handleAmountChange = (item, d) => {
    const ind = cart.products.indexOf(item);
    const arr = cart.products;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    const cartObj = {
      id: cart.id,
      products: [...arr],
      userId: userId
    }
    setCart(cartObj);
    _updateCart(cartObj);
  }

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetchProducts()
        setProducts(response)
      } catch (err) {
        console.error(err)
      }
    }
    getProducts();
  }, [])

  useEffect(() => {
    fetch('http://localhost:3000/api/reviews') // Adjust the URL based on your API route
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setReviews(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  // const [isSearching, setIsSearching] = useState(false);


  // const handleSearch = (searchTerm) => {
  //   console.log(searchTerm)
  //   if (searchTerm != null) {

  //     setIsSearching(true)

  //   } else {

  //     setIsSearching(false)

  //   }
  //   const lowercasedSearchTerm = searchTerm.toLowerCase();
  //   const filteredProducts = products.filter((products) => {
  //     return (
  //       products.name.toLowerCase().includes(lowercasedSearchTerm) ||
  //       products.productType.toLowerCase().includes(lowercasedSearchTerm)
  //     );
  //   });


  //   setFilteredProducts(filteredProducts);
  //   console.log()
  // };

  //onSearch={handleSearch}

  // products={isSearching ? filteredProducts : products}









  return (
    <Router>
      <div className="App">
        {/* Header Component */}
        <Header token={token} />

        <Routes>
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} token={token} userId={userId} handleAmountChange={handleAmountChange} />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/" element={<Homepage products={products} setToken={setToken} token={token} />} />

          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" />
          <Route path="/users" element={<Users />} />
          <Route path="/login" element={<Login setToken={setToken} 
                                               token={token} 
                                               setCart={setCart} 
                                               setUserId={setUserId}/>} />
          <Route path="/products" element={<ProductListing products={products}
                                                            addToCart={addToCart}
                                                            setToken={setToken} 
                                                            token={token}/>} />
          <Route path="/products/id/:productId" element={<SingleProduct reviews={reviews}
                                                                        products={products}
                                                                        setToken={setToken} 
                                                                        token={token}
                                                                        addToCart={addToCart}/>} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/register" element={<Register setToken={setToken} 
                                                     token={token} 
                                                     setUserId={setUserId} 
                                                     setCart={setCart}/>} />
          <Route path="/administrator/register" element={<AdminRegister setToken={setToken}
                                                                        token={token} 
                                                                        setUserId={setUserId} 
                                                                        setCart={setCart}/>} />
        </Routes>

        {/* Footer Component */}
        <Footer2 />
      </div>
    </Router>
  );
}


export default App;

