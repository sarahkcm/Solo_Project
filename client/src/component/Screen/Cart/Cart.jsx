import React, { useRef } from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";
import "./Cart.css";
import { useStateContext } from "../../StateContext";

const Cart = () => {
  const cartRef = useRef();
  const {
    totalPrice,
    totalQt,
    cartItems,
    setViewCart,
    handleCartItemQ,
    Remove,
    plusQt,
    dQt
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
        <div>
        <Link to='/'>
        <button
          type='button'
          className='ch'
          onClick={() => setViewCart(false)}>
          <ChevronLeftIcon />
          <span className='h'>Your Cart</span>
          <span className='cnbrI'>({totalQt} items)</span>
        </button>
        </Link>
        </div>
        {cartItems.length === 0 ? (
          <div className='empty-cart'>
            <h3>Cart in empty</h3>
            <ShoppingCartTwoToneIcon />
            <div>
            <Link to='/'>
              <button
                type='button'
                onClick={() => setViewCart(false)}
                className='btn'
              > Continue Shopping
              </button>
            </Link>
          </div>
          </div>
        ) : (
          <div className='product-container'>
            {cartItems.map((item) => (
              <div className='product' key={item._id}>
                <img
                  src={item.ImageP}
                  alt={item.Image}
                  className='cart-product-image'
                ></img>
                {""}
                <Link to={`/product/${item.Link}`}>{item.Title}</Link>

                <div className='item-desc'>
                  <div className='flex top'>
                    <h5>{item.Title}</h5>
                    <h4>TND {item.Price}</h4>
                  </div>
                  <div className='flex bottom'>
                    <div>
                      <p className='quantity-desc'>
                        <span
                          className='dec'
                          onClick={() => handleCartItemQ(item._id, "dec")}
                        ><RemoveCircleOutlineIcon />

                        </span>
                        <span className='nbr' onClick=''>
                          {item.CInStock}
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
          </div>)}
        {cartItems.length >= 1 && (
            <div className="cart-bottom">
              <div className="total">
                <h3>Total:</h3>
                <h3>TND {totalPrice}</h3>
              </div>
              <div className="btn-container">
                <button type="button" className="btn" >
                  SHOP NOW
                </button>
              </div>
            </div>
          )}
      </div>
    </div>
  );
};

export default Cart;
