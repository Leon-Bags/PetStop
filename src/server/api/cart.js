const express = require('express');
const app = express();


const cartRouter= require('./'); // Replace with the actual path to your cart API module

const { requireUser } = require('./utils')
const { createCart,
        getAllCarts,
        updateCartById,
        deleteCartById,
} = require('../db');

// Middleware to parse JSON requests
app.use(express.json());

// Define API endpoints
cartRouter.get('/', requireUser, async (req, res) => {
    try {
      const carts = await getAllCarts();

      res.send(carts);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
// GET - api/carts
cartRouter.get('/:cartId', requireUser, async (req, res) => {
  try {
    const {cartId} = req.params;
    const cart = await getCartById(cartId);
    res.send(cart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST - api/carts
cartRouter.post('/newcart', requireUser, async (req, res) => {

    const { productId, userId } = req.body;

  try {
    const cart = await createCart({
      productId, userId
    });
    res.send(cart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Define other endpoints for updating, deleting, and retrieving carts

// PATCH - /api/carts - create a new 
cartRouter.patch('/:cartId', requireUser, async (req, res, next) => {
  try {
        const {productId, userId} = req.body
        const {cartId} = req.params
        const updateCart = await updateCartById({
          id: cartId, productId, userId});
        console.log(cartId)
        res.send(updateCart);
    } catch (error) {
        console.log(error)
        next(error);
    }

});

// DELETE - /api/carts
cartRouter.delete('/:cartId', requireUser, async (req, res, next) => {
  try {
    const {cartId} = req.params;
    const deleteCart= await deleteCartById(cartId)
      res.send(deleteCart);
  } catch (error) {
    next(error);
  }
});

module.exports = cartRouter;