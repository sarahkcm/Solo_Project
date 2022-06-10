import React from 'react';
import { useParams } from 'react-router-dom';

const OneProduct = () => {
    const param = useParams();
    const {Link} = param;
    return (
        <div>
            <h1>{Link}</h1>
        </div>
    );
};

export default OneProduct;