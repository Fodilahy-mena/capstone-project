import React, {useState, useEffect} from 'react'
const endpoint = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";
const Context = React.createContext();
function ContextProvider(props) {

    const [allPhotos, setAllPhotos] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    async function getPhotos(url) {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        setAllPhotos(data)
    }
    useEffect(() => {
     getPhotos(endpoint);
     
    }, []);

    function toggleFavorite(id) {
        
        const newPhotosArray = allPhotos.map(photo => {
            // if it is the one, let's return an updated object
            if(photo.id === id) {
                console.log(photo.isFavorite)
                // update this element
                return {
                    ...photo,
                    isFavorite: !photo.isFavorite,}
            }
            // it's not the one I am looking for, therefore, I will not change it
            return photo;
        })
        setAllPhotos(newPhotosArray)
    }
    
    useEffect(() => {
        if(allPhotos) {
            console.log(allPhotos);
        }
        
    }, [allPhotos])
    function addImgToCart(img) {
        // how to add an element to an array, in an immutable way
        // push is mutable (array.push(newstaff))
        // map is immutable (let newArray = array.map())
        console.log("add to cart")
        
        setCartItems(prevItem => [...prevItem, img]);
        
        
    }
    function removeFromCart(img) {
    //    const cartWithoutImg = cartItems.filter(cartItem => cartItem.id !== img);
    //    setCartItems(cartWithoutImg);
    //    console.log("cart item",cartItems)
    // better
        setCartItems(prevItems => prevItems.filter(item => item.id !== img));
    }
    function placeOrder() {
        setCartItems();
    }
    console.log(cartItems);
    return <Context.Provider value={{allPhotos, toggleFavorite, cartItems, addImgToCart, removeFromCart, placeOrder}}>
                {props.children}
            </Context.Provider>
}

export { ContextProvider, Context};