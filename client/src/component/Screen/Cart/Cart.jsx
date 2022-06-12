import React, { useRef } from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import "./Cart.css";
import { useStateContext } from "../../StateContext";
import { Button } from "react-bootstrap";
import { IconButton } from "@mui/material";

const Cart = () => {
  const cartRef = useRef();
  const {
    totalPrice,
    totalQt,
    cartItems,
    setViewCart,
    handleCartItemQ,
    Remove,
  } = useStateContext();
  {
    console.log(totalQt);
  }
  {
    console.log(cartItems);
  }

  return (
    <div className='cw' ref={cartRef}>
      <div className='cc'>
        <button
          type='button'
          className='ch'
          onClick={() => setViewCart(false)}
        >
          <ChevronLeftIcon />
          <span className='h'>Your Cart</span>
          <span className='cnbrI'>({totalQt} items)</span>
        </button>

        {cartItems.length === 0 ? (
          <div className='empty-cart'>
            <h3>Cart in empty</h3>
            <ShoppingCartTwoToneIcon />
            <Link to='/'>
              <button
                type='button'
                onClick={() => setViewCart(false)}
                className='btn'
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        ) : (
          <div className='product-container'>
            {cartItems.map((item) => (
              <div className='product' key={item._id}>
                <img
                  src={item.imagePUB}
                  alt={item.image}
                  className='cart-product-image'
                ></img>
                {""}
                <Link to={`/product/${item.Link}`}>{item.Title}</Link>

                <div className='item-desc'>
                  <div className='flex top'>
                    <h5>{item.name}</h5>
                    <h4>TND {item.price}</h4>
                  </div>
                  <div className='flex bottom'>
                    <div>
                      <p className='quantity-desc'>
                        <span
                          className='dec'
                          onClick={() => handleCartItemQ(item._id, "dec")}
                        >
                          <RemoveCircleOutlineIcon />
                        </span>
                        <span className='nbr' onClick=''>
                          {item.quantity}
                        </span>
                        <span
                          className='inc'
                          onClick={() => handleCartItemQ(item._id, "inc")}
                        >
                          <AddCircleOutlineIcon />
                        </span>
                      </p>
                    </div>
                    <button
                      type='button'
                      className='remove-item'
                      onClick={() => Remove(item)}
                    >
                      <DeleteOutlineIcon />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        )}
      </div>
    </div>
  );
};

export default Cart;
