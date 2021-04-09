import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext({

    productLines: [],
    addProductLine: () => {},
    quantity: 0, 
    total: 0,
    

})


export const Cart = ({ children }) => {

    const [productLines, setProductLines] = useState([]);
    const [total, setTotal] = useState(null); 
    const [quantity, setQuantity] = useState(0); 

    const addProductLine = (product) => {
        setProductLines([...productLines, product])
    }

    //Oppdatere total hver gang productlines oppdateres
    useEffect(() => {
        //0 på slutten gjør at prev blir 0
        const total = productLines.reduce((prev, curr) => {
            return prev + curr.price;
            
        }, 0); 

        setTotal(total); 
        setQuantity(productLines.length);
        
    }, [productLines])
    
    return(
        <CartContext.Provider value={{setProductLines, productLines, addProductLine, total, quantity}}>
            {children}
        </CartContext.Provider>
    )
    
};

export const useCart = () => {
    return useContext(CartContext); 
}