import React, { useState } from 'react';
import { fetchUsersByEmail, login } from '../api/UsersAjaxHelper';
import { fetchCartByUserId, postCart } from '../api/CartsAjaxHelper';

import { useNavigate } from 'react-router-dom';

const Login = ({ setToken, token, setCart, setCartId, setUserId }) => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate()

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const _login = async() => {
    try {
        const response = await fetch(`http://localhost:3000/api/users/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "email": email,
            "password": password 
        })
        });
        const result = await response.json();

        setMessage(result.message);

        const token = result.token;
        const userId = result.userId
        window.localStorage.setItem("token", token);
        window.localStorage.setItem("userId", userId);
        setToken(token);
        setEmail('');
        setPassword('');
        getCart(token);
    } catch (err) {
        console.error(`${err.name}: ${err.message}`);
        alert("Email or Password is incorrect")
    }
  }

  const getCart = async (token) => {
    const user = await fetchUsersByEmail(email);
    setUserId(user.user.id);
    let cart = await fetchCartByUserId(user.user.id, token);
    if (cart === undefined) {
      cart = await postCart({products: [], userId: user.user.id}, token);
    }
    setCartId(cart.id);
    setCart(cart);
  }

  const handleSubmit = (e) => {
    _login();
    if (token) {
      alert("You have been logged in!")
      navigate("/")
    }
  };

  return (
    <div className="form-body">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-div">
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={handleEmailChange}
            required={true}
          />
        </div>
        <div className="form-div">
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={handlePasswordChange}
            required={true}
          />
        </div>
        <button type='submit'>Login</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default Login;
