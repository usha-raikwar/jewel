import React from 'react';

const Product = (props) => (
 <div className="page-content">
     <h1> Added Items: </h1>
     <h3>{props.item.gemStones}</h3>
     <h3>{props.item.caratWeight}</h3>
     <h3>{props.item.metalType}</h3>
     <h3>{props.item.ringSize}</h3>
     <h3>{props.item.price}</h3>
     <br/>
     <h3> That's Wonderful! </h3>
    </div>
);

export default Product;
