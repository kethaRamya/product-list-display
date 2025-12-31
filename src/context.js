import React, { useState, createContext } from 'react';
import ProductsData from './productsdata/ProductsData.json'
export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState('')
    const data = ProductsData.filter(ProductsData =>
        ProductsData.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <UserContext.Provider value={{ data: data, search: { searchTerm, setSearchTerm } }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;