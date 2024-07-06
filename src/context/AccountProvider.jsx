import React, { createContext, useState } from "react";


export const AccountContext =createContext(null);

const AccountProvider=({children})=>{
    const [cartOpen,setCartOpen]=useState(false);
    const [itemsInCart,setItemsInCart]=useState([]);
    const [orderPlaced,setOrderPlaced]=useState(false);
    const [choseItem,setChoseItem]=useState(false);

    return(
        <AccountContext.Provider value={{
           cartOpen,
           setCartOpen,
           itemsInCart,
           setItemsInCart,
           orderPlaced,
           setOrderPlaced,
           choseItem,
           setChoseItem
        }}>
        {children}
        </AccountContext.Provider>
    );
}
export default AccountProvider;