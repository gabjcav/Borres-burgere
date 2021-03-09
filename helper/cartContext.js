import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext({

    productLines: [],
    addProductLine: () => {}

})


export const Cart = ({ children }) => {

    const [productLines, setProductLines] = useState([]);
    const [total, setTotal] = useState(null); 


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
    }, [productLines])
    return(
        <CartContext.Provider value={{productLines, addProductLine, total}}>
            {children}
        </CartContext.Provider>
    )
};

export const CartConsumer = CartContext.Consumer; 

export const useCart = () => {
    return useContext(CartContext); 
}