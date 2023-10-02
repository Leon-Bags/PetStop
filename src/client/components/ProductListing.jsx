import React, { useState } from 'react';

const ProductListing = ({ products }) => {
    const [sortBy, setSortBy] = useState('price'); // Default sorting by price
    const [ascending, setAscending] = useState(true); // Default sorting order

    // Function to handle sorting change
    const handleSortChange = (e) => {
        const selectedValue = e.target.value;
        const [newSortBy, newAscending] = selectedValue.split('-');

        setSortBy(newSortBy);
        setAscending(newAscending === 'asc');
    };

    // Function to sort products based on selected sorting criteria
    const sortedProducts = [...products].sort((a, b) => {
        if (sortBy === 'price') {
            return ascending ? a.price - b.price : b.price - a.price;
        } else if (sortBy === 'name') {
            return ascending
                ? a.name.localeCompare(b.name)
                : b.name.localeCompare(a.name);
        }
        // Add more sorting criteria as needed
    });

    return (
        <div>
            <div>
                <label htmlFor="sort">Sort by:</label>
                <select id="sort" value={`${sortBy}-${ascending ? 'asc' : 'desc'}`} onChange={handleSortChange}>
                    <option value="price-asc">Price (Low to High)</option>
                    <option value="price-desc">Price (High to Low)</option>
                    <option value="name-asc">Name (A to Z)</option>
                    <option value="name-desc">Name (Z to A)</option>
                    {/* Add more sorting options as needed */}
                </select>
            </div>

            <ul>
                {sortedProducts.map((product) => (
                    <li key={product.id}>
                        <h3>{product.name}</h3>
                        <p>Price: ${product.price}</p>
                        {/* Add more product details */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductListing;