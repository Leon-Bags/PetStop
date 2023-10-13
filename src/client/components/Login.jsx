import React, { useState } from 'react';
import { fetchUsersByEmail, fetchUserByPassword, login } from '../api/UsersAjaxHelper';
import { fetchCartByUserId, postCart } from '../api/CartsAjaxHelper';
import { useNavigate } from 'react-router-dom';

const Login = ({ setToken, token, setCart, setUserId }) => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()

  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const _login = async() => {
    try {
        const result = await login(email, password);

        const _user = await fetchUsersByEmail(email);

        console.log(_user)

        if (!_user.user.email === email) {
          alert("Email or Password is incorrect, here?")
          return;
        } else {

        console.log(result)

        const token = result.token;
        const userId = result.userId
        
        window.localStorage.setItem("token", token);
        window.localStorage.setItem("userId", userId);
        setToken(token);
        setUserId(userId);
        setEmail('');
        setPassword('');

        alert("You have been logged in!")
        navigate("/")
      
        await getCart(token, userId)
      }

    } catch (err) {
        console.error(`${err.name}: ${err.message}`);
    }
  }

  const getCart = async (token, userId) => {
    let cart = await fetchCartByUserId(userId, token);
    if (cart === undefined) {
      cart = await postCart({products: [], userId: user.user.id}, token);
    }
    setCart(cart);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    _login();
  };

  return (
    <div>
          <div className="login-container">
            <div className="login-left">
            <form onSubmit={handleSubmit}>
              <h1>Log-In</h1>
              <div className="login-body">
                <label htmlFor='email'></label>
                <input
                  className="login-input"
                  type='email'
                  id='email'
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Email"
                  required={true}
                />
            </div>
            <div className="login-body">
              <label htmlFor='password'></label>
              <input
                className="login-input"
                type='password'
                id='password'
                value={password}
                onChange={handlePasswordChange}
                placeholder="Password"
                required={true}
              />
            </div>
            <button type='submit' className="login-submit-button">Login</button>
          </form>
          </div>
          <div className="login-right">
            
          </div>
        </div>
    </div>
  );
};

export default Login;
