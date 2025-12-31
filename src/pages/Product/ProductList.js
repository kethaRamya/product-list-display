import React, { useState } from "react";
import ProductTable from '../../components/productTable'
import ProductCardView from '../../components/ProductCard'
import SearchProduct from '../../components/search';
import { useNavigate } from "react-router-dom";
export default function ProductList() {
    const navigate = useNavigate();
    const [view, setView] = useState('list')

    const AddLink = () => {
        navigate("/add")

    }
    return (
        <>
            <div>


                <div style={{ display: 'flex', justifyContent: 'end' }}>
                    <SearchProduct />
                    <button className="toogle-button" onClick={() => setView('list')}>List View</button>
                    <button className="toogle-button" onClick={() => setView('card')}>Card View</button>
                    <button className="toogle-button" onClick={AddLink}>Add Product</button>
                </div>
                <div className={view === 'list' ? "container-view" : "card-view"}>
                    {view === 'list' ? <ProductTable /> : <ProductCardView />}
                </div>
            </div>
        </>
    )
}