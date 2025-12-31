import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../context'
export default function SearchProduct() {
    const [debouncedValue, setDebouncedValue] = useState("");
    const { data, search } = useContext(UserContext)
    console.log(search)

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(search.searchTerm);
        }, 500);

        return () => clearTimeout(timer);
    }, [search.searchTerm]);


    useEffect(() => {
        if (debouncedValue) {
            console.log("Searching for:", debouncedValue);
            // Execute your API call or search logic here 

        }
    }, [debouncedValue]);
    return (
        <>
            <div>
                <input type="search"
                    value={search.searchTerm}
                    onChange={(e) => search.setSearchTerm(e.target.value)}
                    placeholder='Search product..'
                    className='search-view'
                />
            </div>
        </>
    )
}