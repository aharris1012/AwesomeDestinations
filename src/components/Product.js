import React from 'react';


const Product= props => {
	return (
		<div className="item">
			<img src={props.product.image} alt="clothing"></img>

			<h1 className="title">{props.product.title}</h1>

			<p className="price">${props.product.price}</p>

			<button className="shop-btn" onClick={() => props.addItem(props.product)}>
				Add to cart
			</button>
		</div>
	);
};

export default Product;