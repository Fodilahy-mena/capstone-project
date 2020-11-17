import React, { useState } from 'react';

function Image({className, photo}) {
    const [isHovered, setIsHovered] = useState(false);
    
    console.log("hovered",isHovered)
    const hartIcon = isHovered && <i className="ri-heart-line favorite"></i>;
    const cartIcon = isHovered && <i className="ri-add-circle-line cart"></i>;
    return (
        <div className={`${className} image-container`}

        onMouseEnter = {() => setIsHovered(true)} onMouseLeave= {() => setIsHovered(false)}
        >
            {hartIcon}
            {cartIcon}
            <img src={photo.url} className="image-grid"/>
        </div>
    )
}

export default Image