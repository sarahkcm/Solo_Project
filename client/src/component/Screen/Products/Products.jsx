import React from "react";
import data from "../../../data.js";
import AddCardOutlinedIcon from "@mui/icons-material/AddCardOutlined";
import "./Products.css";
import { Link } from "react-router-dom";

const Products = () => {
  const MyTitle = ({ title }) => (
    <p
      style={{
        color: "grey",
        fontSize: "10px",
        fontWeight: "bold",
        display: "inline-block",
        padding: "15px 8px 15px 10px",
      }}
    >
      {title}
    </p>
  );
  return (
    <div>
      <h1>Products:</h1>
      <div className='Products'>
        {data.pro.map((product, i) => (
          <div className='Product' key={i}>
            <Link to={`/product/${product.Link}`}>
              <img src={product.image} alt={product.Title} />
            </Link>
            <div className='Detail'>
              <Link to={`/product/${product.Link}`}>
                <p>{product.Title}</p>
              </Link>
              <p>
                <strong>{product.Price}</strong>
              </p>
              <AddCardOutlinedIcon sx={{ "&:hover": { color: "green" } }} />
              <MyTitle title={"Add to cart"} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
