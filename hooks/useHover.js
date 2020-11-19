import React, { useState, useRef, useEffect } from 'react'

function useHover() {
    // challenge:
    
    const [hovered,setHovered] = useState(false);
    const ref = useRef(null);
    function enter() {
        setHovered(true)
    }
    function leave() {
        setHovered(false)
    }
    useEffect(() => {
        const instance = ref.current;
        instance.addEventListener('mouseenter', enter);
        instance.addEventListener('mouseleave', leave);
        return () => {
            //clean up phase, this will return when component unmount
            instance.removeEventListener('mouseenter', enter);
            instance.removeEventListener('mouseleave', leave);
        }
    }, []);

    return [hovered, ref];
    // using useEffect and useRef, make it so when this hook first loads,
    // it sets up the "mouseenter" and "mouseleave" event listeners on the ref.
    // Remember: the ref.current will represent the DOM node, which is where you can 
    // do imperative commands like `.addEventListener` and `removeEventListener` 
}
export default useHover;