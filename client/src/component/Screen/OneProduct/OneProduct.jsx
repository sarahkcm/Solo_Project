import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Card, Col, ListGroup, Row } from 'react-bootstrap';
import Inventory2TwoToneIcon from '@mui/icons-material/Inventory2TwoTone';
import AddCardTwoToneIcon from '@mui/icons-material/AddCardTwoTone';
import { useParams } from 'react-router-dom';
import Rating from '../Rating/Rating';
import './OneProduct.css'
import { Stack,Badge, Button } from '@mui/material';
import { Store } from '../Store/Store';

const OneProduct = () => {
    const param = useParams();
    const {Link} = param;
    const [OneProduct, setOneProduct] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(`/api/weed-choco/products/onlyOne/${Link}`);
      setOneProduct(result.data);
    };
    getData();
  }, [Link]);

  
//  const handleAddToCart = () =>{
//     const { state, dispatch: ctxDispatch } = useContext(Store);
//     const addToCartHandler = () => {
//       ctxDispatch({
//         type: 'CART_ADD_ITEM',
//         payload: { ...OneProduct, quantity: 1 },
//       });
//     };
//   }
    return (
        <div>
            <Row>
            <Col md={6}>
                <img 
                className='img-large'
                src={OneProduct.imagePUB||OneProduct.image}
                alt={OneProduct.Title}>
                </img>
            </Col>
            <Col md={3}>
                <ListGroup>
                    <ListGroup.Item variant='flush'>
                    <h1>{OneProduct.Title}</h1>
                    <h2>{OneProduct.brand}</h2>
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <Rating rate={OneProduct.rate} view={OneProduct.nbrView} />
                    </ListGroup.Item>
                    <ListGroup.Item><strong>Price: TND </strong>{OneProduct.Price}</ListGroup.Item>
                    <ListGroup.Item><strong>Description:</strong> {OneProduct.Description}</ListGroup.Item>
                    <ListGroup.Item><strong>Ingredients:</strong> {OneProduct.Ingredients}</ListGroup.Item>
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
                            <br/>
                            <Col> {OneProduct.countInStock > 0 ? (
                            <Stack spacing={4} direction="row" sx={{ color: 'action.active' }}>
                            <Badge color="secondary" badgeContent={OneProduct.countInStock}>
                              <Inventory2TwoToneIcon /></Badge> {'\u00A0'} In Stock</Stack>
                            ):(<Stack spacing={4} direction="row" sx={{ color: 'action.active' }}>
                            <Badge color="secondary" badgeContent={OneProduct.countInStock} showZero>
                              <Inventory2TwoToneIcon /></Badge> {'\u00A0'} Out of Stock</Stack>
                        )}</Col>
                        {console.log(OneProduct.countInStock,"count")}
                            </Row>
                        </ListGroup.Item>
                        {OneProduct.countInStock > 0 && (
                            <ListGroup.Item>
                                <div className='d-grid'>
                                <Button >
                                <AddCardTwoToneIcon sx={{ "&:hover": { color: "green" } }}/>
                                {'\u00A0'} Shop
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