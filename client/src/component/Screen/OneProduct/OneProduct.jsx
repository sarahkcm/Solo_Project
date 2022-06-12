import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useStateContext } from "../../StateContext";
import { Card, Col, ListGroup, Row } from "react-bootstrap";
import Inventory2TwoToneIcon from "@mui/icons-material/Inventory2TwoTone";
import AddCardTwoToneIcon from "@mui/icons-material/AddCardTwoTone";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useParams } from "react-router-dom";
import Rating from "../Rating/Rating";
import "./OneProduct.css";
import { Stack, Badge, Button } from "@mui/material";

const OneProduct = () => {
  const param = useParams();
  const { Link } = param;
  const [OneProduct, setOneProduct] = useState([]);
  const { qt, plusQt, deQt,Add } = useStateContext();
  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        `/api/weed-choco/products/onlyOne/${Link}`
      );
      setOneProduct(result.data);
    };
    getData();
    
  }, [Link]);

  return (
      <div>
        {console.log(OneProduct, "one")}
      <Row>
        <Col md={8}>
          <img
            className='img-large'
            src={OneProduct.ImageP || OneProduct.Image}
            alt={OneProduct.Title}
          ></img>
        </Col>
        <Col md={3}>
          <ListGroup>
            <ListGroup.Item variant='flush'>
              <h1>{OneProduct.Title}</h1>
              <h2>{OneProduct.Brand}</h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating rate={OneProduct.Rate} view={OneProduct.NbrView} />
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Price: TND </strong>
              {OneProduct.Price}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Description:</strong> {OneProduct.Description}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Ingredients:</strong> {OneProduct.Ingredients}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>TND {OneProduct.Price}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <br />
                    <Col>
                      {" "}
                      {OneProduct.CInStock > 0 ? (
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            flexWrap: "wrap",
                          }}
                        >
                          <Button onClick={deQt}>
                            <RemoveCircleOutlineIcon />
                          </Button>
                          <Badge
                            color='secondary'
                            badgeContent={OneProduct.CInStock - qt}
                          >
                            <Badge color='secondary' badgeContent={qt}>
                              <Inventory2TwoToneIcon display='inline-block' />
                            </Badge>
                            <Button>
                              <AddCircleOutlineIcon onClick={OneProduct.countInStock>qt ? plusQt :0} />
                            </Button>
                          </Badge>{" "}
                          {"\u00A0"} In Stock
                        </div>
                      ) : (
                        <div>
                          <Badge
                            color='secondary'
                            badgeContent={OneProduct.CInStock}
                            showZero
                          >
                            <Inventory2TwoToneIcon />
                          </Badge>{" "}
                          {"\u00A0"} Out of Stock
                        </div>
                      )}
                    </Col>
                    {console.log(OneProduct.CInStock, "count")}
                  </Row>
                </ListGroup.Item>
                {OneProduct.CInStock > 0 && (
                  <ListGroup.Item>
                    <div className='d-grid'>
                      <Button onClick={()=>Add(OneProduct,qt)}>
                        <AddCardTwoToneIcon
                          sx={{ "&:hover": { color: "green" } }}
                        />
                        {"\u00A0"} Shop
                      </Button>
                    </div>
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default OneProduct;
