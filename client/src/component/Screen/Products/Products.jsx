import React, { useEffect, useState } from "react";
import { useStateContext } from "../../StateContext";
import axios from "axios";
import AddCardOutlinedIcon from "@mui/icons-material/AddCardOutlined";
import "./Products.css";
import { Link } from "react-router-dom";
import { Row, Col, Card } from "react-bootstrap";
import Rating from "../Rating/Rating.jsx"
import { Button } from "@mui/material";

const Products = () => {
  const MyTitle = ({ title }) => (
    <p
      style={{
        color: "black",
        fontSize: "10px",
        fontWeight: "bold",
        display: "inline-block",
        padding: "15px 8px 15px 10px",
      }}
    >
      {title}
    </p>
  );

  const [pro, setPro] = useState([]);
  const {Add, qt} = useStateContext();
  useEffect(() => {
    const getData = async () => {
      const result = await axios.get("/api/weed-choco/products");
      setPro(result.data);
    };
    getData();
  }, []);

  return (
    <div>
      <h1>Products:</h1>
      <Row>
        <div className='Products'>
          {pro.map((product, i) => (
            <Col sm={7} md={4} lg={3} className='mb-3' key={i}>
              <Card>
                <div className='Product'>
                  <Link to={`/product/${product.Link}`}>
                    <img
                      src={product.image}
                      className='card-img-top'
                      alt={product.Title}
                    ></img>
                  </Link>
                  <Card.Body>
                    <Link to={`/product/${product.Link}`}>
                      <Card.Title>{product.Title}</Card.Title>
                      <Rating rate={product.rate} view={product.nbrView} />
                    </Link>
                    <Card.Text>
                      <strong>TND {product.Price}</strong>
                    </Card.Text>
                  </Card.Body>
                  <AddCardOutlinedIcon sx={{ "&:hover": { color: "green" } }} />
                  <Button size="small" sx={{ "&:hover": { color: "green" } }} onClick={()=>Add(product,qt)}><MyTitle title={"Add to cart"} /></Button>
                </div>
              </Card>
            </Col>
          ))}
        </div>
      </Row>
    </div>
  );
};

export default Products;
