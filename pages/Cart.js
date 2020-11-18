import React, { useContext, useState }from 'react';
import Image from '../components/Image';
import {getClass} from '../utils';
import { Context } from '../Context';
import CartItem from '../components/CartItem';


function Cart() {
	const { cartItems , placeOrder}= useContext(Context);
	
	const totalCost = 5.99 * cartItems.length;
	const totalCostDesplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"});
	const itemElements = cartItems.map(item => (
			<CartItem key={item.id} item={item}/>
	))
	
	return (
		<main className="cart-page">
			<h1>Check out</h1>
			{itemElements}
			<p className="total-cost">Total: {totalCostDesplay}</p>
			<div className="order-button">
				<button>Place Order</button>
			</div>
		</main>
	);
}

export default Cart;
