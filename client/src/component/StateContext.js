import React, { useEffect, createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";

const Context = createContext();

export function StateContext({ children }) {
  const [pro, setPro] = useState([]);
  const [viewCart, setViewCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState();
  const [totalQ, setTotalQ] = useState();
  const [qt, setQt] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let productF;
  let key;

  const Add = (product, qt) => {
    const checkInCart = cartItems.find((item) => item._id === product._id);

    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.Price * qt);
    setQt((prevTotalQ) => prevTotalQ + 1);

    if (checkInCart) {
      const productF = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            qt: cartProduct.qt + qt,
          };
      });

      setCartItems(productF);
    } else {
      product.qt = qt;

      setCartItems([...cartItems, { ...product }]);
    }

    toast.success(`${qt} ${product.Title} added to the cart.`);
  };

  const Remove = (product) => {
    productF = cartItems.find((item) => item._id === product._id);
    const newCartItems = cartItems.filter((item) => item._id !== product._id);

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice - productF.price * productF.qt
    );
    setQt((prevTotalQ) => prevTotalQ - productF.qt);
    setCartItems(newCartItems);
  };

  const handleCartItemQ = (id, value) => {
    productF = cartItems.find((item) => item._id === id);
    key = cartItems.findById((product) => product._id === id);
    const newCartItems = cartItems.filter((item) => item._id !== id);

    if (value === "inc") {
      setCartItems([...newCartItems, { ...productF, qt: productF.qt + 1 }]);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + productF.price);
      setQt((prevTotalQ) => prevTotalQ + 1);
    } else if (value === "dec") {
      if (productF.qt > 1) {
        setCartItems([...newCartItems, { ...productF, qt: productF.qt - 1 }]);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - productF.price);
        setQt((prevTotalQ) => prevTotalQ - 1);
      }
    }
  };

  const plusQt = () => {
    setQt((prevQt) => prevQt + 1);
  };

  const deQt = () => {
    setQt((prevqt) => {
      if (prevqt - 1 < 1) return 1;
      return prevqt - 1;
    });
  };

  return (
    <Context.Provider
      value={{
        viewCart,
        cartItems,
        totalPrice,
        totalQ,
        qt,
        plusQt,
        deQt,
        Add,
        Remove,
        handleCartItemQ,
        setCartItems,
        setTotalQ,
        setTotalPrice,
        setViewCart,
        pro,
        setPro,
        qt,
        setQt,
        email,
        password,
        setEmail,
        setPassword
      }}
    >
      {children}
    </Context.Provider>
  );
}

export const useStateContext = () => useContext(Context);
