import React, { useContext, useState }from 'react';
import Image from '../components/Image';
import {getClass} from '../utils';
import { Context } from '../Context';
import CartItem from '../components/CartItem';


function Cart() {
	const { cartItems , emptyCart}= useContext(Context);
	const [orderBtnText, setOrderBtnText] = useState("Place Order");
	
	const totalCost = 5.99 * cartItems.length;
	const totalCostDesplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"});
	const itemElements = cartItems.map(item => (
			<CartItem key={item.id} item={item}/>
	))
	function handleOrder() {
		//change the text
		setOrderBtnText("Ordering....")
		// place the order with the context promise
		
		setTimeout(() => {
			emptyCart();
			setOrderBtnText("Place Order")   
			}, 3000)
		//when the order resolve, change the text again
		
	}
	
	return (
		<main className="cart-page">
			<h1>Check out</h1>
			{itemElements}
			<p className="total-cost">Total: {totalCostDesplay}</p>
				<div className="order-button">
				{cartItems.length > 0 
				? 
				<button onClick={handleOrder}>{orderBtnText}</button>
				: 
				<p>You have no items in your cart</p>
			}
			</div>
		</main>
	);
}

export default Cart;
