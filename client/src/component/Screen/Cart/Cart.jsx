import React, { useRef } from 'react';
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {Link} from 'react-router-dom';
import toast from 'react-hot-toast';
import './Cart.css'
import { useStateContext } from "../../StateContext";

const Cart = () => {
  const cartRef = useRef();
  const { totalPrice, totalQt, cartItems, setViewCart, handleCartItemQ, Remove } = useStateContext();
  {console.log(totalQt)}
  {console.log(cartItems)}
  

  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button
        type="button"
        className="cart-heading"
        onClick={() => setViewCart(false)}>
          <ChevronLeftIcon  />
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">({totalQt} items)</span>
         
        </button>

        {cartItems.length < 1 && (
          <div className="empty-cart">
            <ShoppingCartTwoToneIcon size={150} />
            <h3>Your shopping bag is empty</h3>
            <Link href="/">
              <button
                type="button"
                onClick={() => setViewCart(false)}
                className="btn">
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        <div className="product-container">
          {cartItems.length >= 1 && cartItems.map((item) => (
            <div className="product" key={item._id}>
              <img src={""} className="cart-product-image" />
              <div>
                <div>
                  <h5>{item.Title}</h5>
                  <h4>${item.Price}</h4>
                </div>
                <div className="flex bottom">
                  <div className="quantity-desc">
                  <p>
                    <span className="minus" onClick={() => handleCartItemQ(item._id, 'dec') }>
                    <RemoveCircleOutlineIcon />
                    </span>
                    <span className="num" onClick="">{item.countInStock}</span>
                    <span className="plus" onClick={() => handleCartItemQ(item._id, 'inc') }><AddCircleOutlineIcon /></span>
                  </p>
                  </div>
                  <button
                    type="button"
                    className="remove-item"
                    onClick={() => Remove(item)}
                  >
                    <DeleteOutlineIcon />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Subtotal:</h3>
              <h3>TND {totalPrice}</h3>
            </div>
            <div className="btn-container">
              <button type="button" className="btn">
                Pay with Stripe
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart