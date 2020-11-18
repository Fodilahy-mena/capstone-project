import React, { useContext, useState } from 'react';
import {Context} from '../Context';
import PropTypes from 'prop-types';


function Image({className, photo}) {
    const [isHovered, setIsHovered] = useState(false);
    const {toggleFavorite, addImgToCart, cartItems, removeFromCart} = useContext(Context);
    
    function hartIcon() {
        if(photo.isFavorite) {
            return (<i onClick={() => toggleFavorite(photo.id)} className="ri-heart-fill favorite"></i>)
        } else if(isHovered) {
            return (<i onClick={() => toggleFavorite(photo.id)} className="ri-heart-line favorite"></i>)
        }
    }
    function cartIcon() {
        if(cartItems.some(cartItem => cartItem.id === photo.id)) {
            return (<i onClick={() => removeFromCart(photo.id)} className="ri-shopping-cart-fill cart"></i>)
        } else if(isHovered) {
           return (<i onClick={() => addImgToCart(photo)} className="ri-add-circle-line cart"></i>)
        }
    }
    // const cartIcon = isHovered && <i onClick={() => addImgToCart(photo)} className="ri-add-circle-line cart"></i>;
    return (
        <div className={`${className} image-container`}

        onMouseEnter = {() => setIsHovered(true)} onMouseLeave= {() => setIsHovered(false)}
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
        isHovered: PropTypes.bool,
    }).isRequired
    // toggleFavorite: PropTypes.func,
    
}

export default Image