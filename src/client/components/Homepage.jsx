import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Homepage({ products, token }) {

    const navigate = useNavigate()

    return (
        <>
            <div className="welcome-page">
                <div className="welcome-page-header">
                    <div className="header-content">
                        <h1 className="h1" >Welcome!</h1>
                        <p className="welcome-script">Where Pets Shop, Happiness Follows.</p>
                    </div>
                </div>

            </div>

            <div className="products-featured-header">
                <h1>Popular Items</h1>
            </div>
            <div className="products-display">
                {products.filter(product => product.isPopular).map(filteredProduct => (
                    <div onClick={() => { navigate(`/products/id/${filteredProduct.id}`) }} className="product-info" key={filteredProduct.id}>
                        <img src={filteredProduct.imgUrl} className="product-image-sizing" />
                        <h3>{filteredProduct.name}</h3>
                        <p>Price: ${filteredProduct.price}</p>
                    </div>
                ))}
            </div>
        </>
    )

}