import React, { useContext, useState } from 'react';
import {Context} from '../Context';
import PropTypes from 'prop-types';
import useHover from '../hooks/useHover';


function Image({className, photo}) {
    const [hovered, ref] = useHover();
    const {toggleFavorite, addImgToCart, cartItems, removeFromCart} = useContext(Context);
    
    function hartIcon() {
        if(photo.isFavorite) {
            return (<i onClick={() => toggleFavorite(photo.id)} className="ri-heart-fill favorite"></i>)
        } else if(hovered) {
            return (<i onClick={() => toggleFavorite(photo.id)} className="ri-heart-line favorite"></i>)
        }
    }
    function cartIcon() {
        if(cartItems.some(cartItem => cartItem.id === photo.id)) {
            return (<i onClick={() => removeFromCart(photo.id)} className="ri-shopping-cart-fill cart"></i>)
        } else if(hovered) {
           return (<i onClick={() => addImgToCart(photo)} className="ri-add-circle-line cart"></i>)
        }
    }
    // const cartIcon = isHovered && <i onClick={() => addImgToCart(photo)} className="ri-add-circle-line cart"></i>;
    return (
        <div className={`${className} image-container`}
        ref={ref}
        // onMouseEnter = {() => setIsHovered(true)} onMouseLeave= {() => setIsHovered(false)}
        >
            {hartIcon()}
            {cartIcon()}
            <img src={photo.url} className="image-grid"/>
        </div>
    )
}
Image.propTypes = {
    className: PropTypes.string,
    photo: PropTypes.shape({
        id: PropTypes.string,
        url: PropTypes.string,
        hovered: PropTypes.bool,
    }).isRequired
    // toggleFavorite: PropTypes.func,
    
}

export default Image