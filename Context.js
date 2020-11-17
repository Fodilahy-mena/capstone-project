import React, {useState, useEffect} from 'react'
const endpoint = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";
const Context = React.createContext();
function ContextProvider(props) {

    const [allPhotos, setAllPhotos] = useState([]);

    async function getPhotos(url) {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        setAllPhotos(data)
    }
    useEffect(() => {
     getPhotos(endpoint);
    }, []);

    useEffect(() => {
        if(allPhotos) {
            console.log(allPhotos);
        }
    }, [allPhotos])
    return <Context.Provider value={{allPhotos}}>
                {props.children}
            </Context.Provider>
}

export { ContextProvider, Context};