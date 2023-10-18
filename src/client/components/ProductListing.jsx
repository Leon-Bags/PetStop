import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

//import SingleProduct from "./SingleProduct";

const ProductListing = ({ products, addToCart, token }) => {
    const [sortBy, setSortBy] = useState('price'); // Default sorting by price
    const [ascending, setAscending] = useState(true); // Default sorting order
    const [petType, setPetType] = useState('')
    const [productType, setProductType] = useState('')


    const [allColor, setAllColor] = useState('')
    const [dogsColor, setDogsColor] = useState('')
    const [catsColor, setCatsColor] = useState('')
    const [birdsColor, setBirdsColor] = useState('')
    const [reptilesColor, setReptilesColor] = useState('')

    const [proAllColor, setProAllColor] = useState('')
    const [foodColor, setFoodColor] = useState('')
    const [toysColor, setToysColor] = useState('')
    const [bedsColor, setBedsColor] = useState('')
    const [housesColor, setHousesColor] = useState('')
    const [cagesColor, setCagesColor] = useState('')
    const [scratchersColor, setScratchersColor] = useState('')
    const [treesColor, setTreesColor] = useState('')
    const [litterBoxColor, setLitterBoxColor] = useState('')
    const [accessoriesColor, setAccessoriesColor] = useState('')
    const [tanksColor, setTanksColor] = useState('')
    const [heatColor, setHeatColor] = useState('')
    
    const navigate = useNavigate()
  
    const handlePetType = (e) => {
        e.prevendDefault();
        const value = e.target.value;
        setPetType(value);
    }

    const handleProductType = (e) => {
        e.prevendDefault();
        const value = e.target.value
        setProductType(value);
    }

    // const handleColorChange = (e) => {
    //     setColorChange('#f2f1f1')
    // }

    // const createCart = async (e) => {
    //     const response = await postCart()
    // }

    useEffect(() => {
        if (petType === 'All') {
            setAllColor('#f2f1f1')
        } else
            setAllColor('white')
            
      }, [petType]);

    useEffect(() => {
        if (petType === 'Dogs') {
            setDogsColor('#f2f1f1')
        } else
            setDogsColor('white')

      }, [petType]);

    useEffect(() => {
        if (petType === 'Cats') {
            setCatsColor('#f2f1f1')
        } else
            setCatsColor('white')

      }, [petType]);

    useEffect(() => {
        if (petType === 'Birds') {
            setBirdsColor('#f2f1f1')
        } else
            setBirdsColor('white')

      }, [petType]);

    useEffect(() => {
        if (petType === 'Reptiles/Amphibians') {
            setReptilesColor('#f2f1f1')
        } else
            setReptilesColor('white')

      }, [petType]);

    useEffect(() => {
        if (productType === 'All') {
            setProAllColor('#f2f1f1')
        } else
            setProAllColor('white')

      }, [productType]);

    useEffect(() => {
        if (productType === 'Food') {
            setFoodColor('#f2f1f1')
        } else
            setFoodColor('white')

      }, [productType]);

    useEffect(() => {
        if (productType === 'Toys') {
            setToysColor('#f2f1f1')
        } else
            setToysColor('white')

      }, [productType]);
    
    useEffect(() => {
        if (productType === 'Beds') {
            setBedsColor('#f2f1f1')
        } else
            setBedsColor('white')

      }, [productType]);
    
    useEffect(() => {
        if (productType === 'Houses') {
            setHousesColor('#f2f1f1')
        } else
            setHousesColor('white')

      }, [productType]);
    
    useEffect(() => {
        if (productType === 'Cages') {
            setCagesColor('#f2f1f1')
        } else
            setCagesColor('white')

      }, [productType]);
    
    useEffect(() => {
        if (productType === 'Scratchers') {
            setScratchersColor('#f2f1f1')
        } else
            setScratchersColor('white')

      }, [productType]);
    
    useEffect(() => {
        if (productType === 'Trees') {
            setTreesColor('#f2f1f1')
        } else
            setTreesColor('white')

      }, [productType]);
    
    useEffect(() => {
        if (productType === 'Litter Boxes') {
            setLitterBoxColor('#f2f1f1')
        } else
            setLitterBoxColor('white')

      }, [productType]);
    
    useEffect(() => {
        if (productType === 'Accessories') {
            setAccessoriesColor('#f2f1f1')
        } else
            setAccessoriesColor('white')

      }, [productType]);
    
    useEffect(() => {
        if (productType === 'Tanks') {
            setTanksColor('#f2f1f1')
        } else
            setTanksColor('white')

      }, [productType]);
    
    useEffect(() => {
        if (productType === 'Heating/Lighting') {
            setHeatColor('#f2f1f1')
        } else
            setHeatColor('white')

      }, [productType]);
    
    
      useEffect(() => {
    
      }, [productType]);

    // Function to handle sorting change

  //return (products.map((element, key) =>
  //<SingleProduct products={element} key={key} />
  
  // Function to handle sorting change

    const handleSortChange = (e) => {
        e.prevendDefault();
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
        // console.log(sortedProducts)
        // Add more sorting criteria as needed
    });

    return (
        <div>
            <div className="pet-type">

                <div className="pet-type-all">
                    <button onClick={handlePetType}
                            className="pet-type-all-button"
                            style={{backgroundColor:allColor}}
                            value='All'>All</button>
                </div>
                
                <div className="pet-type-dogs">
                    <button onClick={handlePetType}
                            className="pet-type-dogs-button"
                            style={{backgroundColor:dogsColor}}
                            value='Dogs'>Dogs</button>
                </div>
                <div className="pet-type-cats">
                    <button onClick={handlePetType}
                            className="pet-type-cats-button"
                            style={{backgroundColor:catsColor}}
                            value='Cats'>Cats</button>
                </div>
                <div className="pet-type-birds">
                    <button onClick={handlePetType}
                            className="pet-type-birds-button"
                            style={{backgroundColor:birdsColor}}
                            value='Birds'>Birds</button>
                </div>
                <div className="pet-type-reptiles-amphibians">
                    <button onClick={handlePetType}
                            className="pet-type-reptiles-amphibians-button"
                            style={{backgroundColor:reptilesColor}}
                            value='Reptiles/Amphibians'>Reptiles</button>
                </div>
            </div>

            <div className="product-type">
                    {petType === 'Reptiles/Amphibians' ?
                                <div className="product-type-reptiles-amphibians">
                                    <div className="product-type-all">
                                        <button onClick={handleProductType}
                                                value="All"
                                                style={{backgroundColor:proAllColor}}
                                                className="product-type-accessories-button">All</button>
                                    </div>
                                    <div className="product-type-food">
                                        <button onClick={handleProductType}
                                                value="Food"
                                                style={{backgroundColor:foodColor}}
                                                className="product-type-food-button">Food</button>
                                    </div>
                                    <div className="product-type-tanks">
                                        <button onClick={handleProductType}
                                                value="Tanks"
                                                style={{backgroundColor:tanksColor}}
                                                className="product-type-tanks-button">Tanks</button>
                                    </div>
                                    <div className="product-type-heating-lighting">
                                        <button onClick={handleProductType}
                                                value="Heating/Lighting"
                                                style={{backgroundColor:heatColor}}
                                                className="product-type-heating-lighting-button">Heating/Lighting</button>
                                    </div>
                                    <div className="product-type-accessories">
                                        <button onClick={handleProductType}
                                                value="Accessories"
                                                style={{backgroundColor:accessoriesColor}}
                                                className="product-type-accessories-button">Accessories</button>
                                    </div>
                                </div>
                            : null }
                    {petType === 'Birds' ?
                                <div className="product-type-birds">
                                    <div className="product-type-all">
                                        <button onClick={handleProductType}
                                                value="All"
                                                style={{backgroundColor:proAllColor}}
                                                className="product-type-accessories-button">All</button>
                                    </div>
                                    <div className="product-type-food">
                                        <button onClick={handleProductType}
                                                value="Food"
                                                style={{backgroundColor:foodColor}}
                                                className="product-type-food-button">Food</button>
                                    </div>
                                    <div className="product-type-toys">
                                        <button onClick={handleProductType}
                                                value="Toys"
                                                style={{backgroundColor:toysColor}}
                                                className="product-type-toys-button">Toys</button>
                                    </div>
                                    <div className="product-type-cages">
                                        <button onClick={handleProductType}
                                                value="Cages"
                                                style={{backgroundColor:cagesColor}}
                                                className="product-type-cages-button">Cages</button>
                                    </div>
                                    <div className="product-type-accessories">
                                        <button onClick={handleProductType}
                                                value="Accessories"
                                                style={{backgroundColor:accessoriesColor}}
                                                className="product-type-accessories-button">Accessories</button>
                                    </div>
                                </div>
                            : null }
                    {petType === 'Dogs' ?
                        <div className="product-type-dogs">
                            <div className="product-type-all">
                                <button onClick={handleProductType}
                                        value="All"
                                        style={{backgroundColor:proAllColor}}
                                        className="product-type-accessories-button">All</button>
                            </div>
                            <div className="product-type-food">
                                <button onClick={handleProductType}
                                        value="Food"
                                        style={{backgroundColor:foodColor}}
                                        className="product-type-food-button">Food</button>
                            </div>
                            <div className="product-type-toys">
                                <button onClick={handleProductType}
                                        value="Toys"
                                        style={{backgroundColor:toysColor}}
                                        className="product-type-toys-button">Toys</button>
                            </div>
                            <div className="product-type-beds">
                                <button onClick={handleProductType}
                                        value="Beds"
                                        style={{backgroundColor:bedsColor}}
                                        className="product-type-beds-button">Beds</button>
                            </div>
                            <div className="product-type-houses">
                                <button onClick={handleProductType}
                                        value="Houses"
                                        style={{backgroundColor:housesColor}}
                                        className="product-type-houses-button">Houses</button>
                            </div>
                            <div className="product-type-cages">
                                <button onClick={handleProductType}
                                        value="Cages"
                                        style={{backgroundColor:cagesColor}}
                                        className="product-type-cages-button">Cages</button>
                            </div>
                            <div className="product-type-accessories">
                                <button onClick={handleProductType}
                                        value="Accessories"
                                        style={{backgroundColor:accessoriesColor}}
                                        className="product-type-accessories-button">Accessories</button>
                            </div>
                        </div>
                    : null }
                    {petType === 'Cats' ?
                    <div className="product-type-cats">
                        <div className="product-type-all">
                            <button onClick={handleProductType}
                                    value="All"
                                    style={{backgroundColor:proAllColor}}
                                    className="product-type-accessories-button">All</button>
                        </div>
                        <div className="product-type-food">
                            <button onClick={handleProductType}
                                    value="Food"
                                    style={{backgroundColor:foodColor}}
                                    className="product-type-food-button">Food</button>
                        </div>
                        <div className="product-type-toys">
                            <button onClick={handleProductType}
                                    value="Toys"
                                    style={{backgroundColor:toysColor}}
                                    className="product-type-toys-button">Toys</button>
                        </div>
                        <div className="product-type-beds">
                            <button onClick={handleProductType}
                                    value="Beds"
                                    style={{backgroundColor:bedsColor}}
                                    className="product-type-beds-button">Beds</button>
                        </div>
                        <div className="product-type-scratchers">
                            <button onClick={handleProductType}
                                    value="Scratchers"
                                    style={{backgroundColor:scratchersColor}}
                                    className="product-type-scratchers-button">Scratchers</button>
                        </div>
                        <div className="product-type-trees">
                            <button onClick={handleProductType}
                                    value="Trees"
                                    style={{backgroundColor:treesColor}}
                                    className="product-type-trees-button">Trees</button>
                        </div>
                        <div className="product-type-litterboxes">
                            <button onClick={handleProductType}
                                    value="Litter Boxes"
                                    style={{backgroundColor:litterBoxColor}}
                                    className="product-type-litterboxes-button">Litter Boxes</button>
                        </div>
                        <div className="product-type-accessories">
                            <button onClick={handleProductType}
                                    value="Accessories"
                                    style={{backgroundColor:accessoriesColor}}
                                    className="product-type-accessories-button">Accessories</button>
                        </div>
                    </div>
                : null }
            </div>
            <div>
                <label className= "sort-by-label" htmlFor="sort">Sort by:</label>
                <select className="sort-by-select" id="sort" value={`${sortBy}-${ascending ? 'asc' : 'desc'}`} onChange={handleSortChange}>
                    <option value="price-asc">Price (Low to High)</option>
                    <option value="price-desc">Price (High to Low)</option>
                    <option value="name-asc">Name (A to Z)</option>
                    <option value="name-desc">Name (Z to A)</option>
                    {/* Add more sorting options as needed */}
                </select>
            </div>

            <div className="products-display">


                {petType === '' && productType === '' ? sortedProducts.map((product) => (
                    <div className='product-info-container' key={product.id}>
                        <div className='product-info' onClick={() => {navigate(`/products/id/${product.id}`)}}> 
                            <img src={product.imgUrl} className="product-image-sizing"/>
                            <h3>{product.name}</h3>
                            <p>Price: ${product.price}</p>
                        </div>
                        { !token ? null : <button onClick={() => {addToCart(product)}} className="add-cart-button">Add to Cart</button>}
                        {/* Add more product details */}
                    </div>
                )) : null }

                {petType === 'All' ? sortedProducts.map((product) => (
                    <div>
                    <div onClick={() => {navigate(`/products/id/${product.id}`)}} className="product-info" key={product.id}>
                        <img src={product.imgUrl} className="product-image-sizing"/>
                        <h3>{product.name}</h3>
                        <p>Price: ${product.price}</p>
                        {/* Add more product details */}
                    </div>
                    { !token ? null : <button onClick={() => {addToCart(product)}} className="add-cart-button">Add to Cart</button>}
                </div>
                )) : null }

                    {petType === 'Dogs' && productType === '' ? sortedProducts.filter(product => product.petType === 'dog').map(filteredProduct => (
                    <div>
                        <div onClick={() => {navigate(`/products/id/${filteredProduct.id}`)}} className="product-info" key={filteredProduct.id}>
                            <img src={filteredProduct.imgUrl} className="product-image-sizing"/>
                            <h3>{filteredProduct.name}</h3>
                            <p>Price: ${filteredProduct.price}</p>
                            {/* Add more product details */}
                        </div>
                        { !token ? null : <button onClick={() => {addToCart(filteredProduct)}} className="add-cart-button">Add to Cart</button>}
                    </div>
                    )) : null}

                                {petType === 'Dogs' && productType === 'All' || '' ? sortedProducts.filter(product => product.petType === 'dog').map(filteredProduct => (
                                        <div>
                                            <div onClick={() => {navigate(`/products/id/${filteredProduct.id}`)}} className="product-info" key={filteredProduct.id}>
                                                <img src={filteredProduct.imgUrl} className="product-image-sizing"/>
                                                <h3>{filteredProduct.name}</h3>
                                                <p>Price: ${filteredProduct.price}</p>
                                                {/* Add more product details */}
                                            </div>
                                            { !token ? null : <button onClick={() => {addToCart(filteredProduct)}} className="add-cart-button">Add to Cart</button>}
                                        </div>
                                        )) : null}
                                
                                {petType === 'Dogs' && productType === 'Food' ? sortedProducts.filter(product => product.petType === 'dog' && product.productType === 'food').map(filteredProduct => (
                                        <div>
                                            <div onClick={() => {navigate(`/products/id/${filteredProduct.id}`)}} className="product-info" key={filteredProduct.id}>
                                                <img src={filteredProduct.imgUrl} className="product-image-sizing"/>
                                                <h3>{filteredProduct.name}</h3>
                                                <p>Price: ${filteredProduct.price}</p>
                                                {/* Add more product details */}
                                            </div>
                                            { !token ? null : <button onClick={() => {addToCart(filteredProduct)}} className="add-cart-button">Add to Cart</button>}
                                        </div>
                                        )) : null}

                                {petType === 'Dogs' && productType === 'Toys' ? sortedProducts.filter(product => product.petType === 'dog' && product.productType === 'toy').map(filteredProduct => (
                                        <div>
                                            <div onClick={() => {navigate(`/products/id/${filteredProduct.id}`)}} className="product-info" key={filteredProduct.id}>
                                                <img src={filteredProduct.imgUrl} className="product-image-sizing"/>
                                                <h3>{filteredProduct.name}</h3>
                                                <p>Price: ${filteredProduct.price}</p>
                                                {/* Add more product details */}
                                            </div>
                                            { !token ? null : <button onClick={() => {addToCart(filteredProduct)}} className="add-cart-button">Add to Cart</button>}
                                        </div>
                                        )) : null}

                                {petType === 'Dogs' && productType === 'Beds' ? sortedProducts.filter(product => product.petType === 'dog' && product.productType === 'bed').map(filteredProduct => (
                                        <div>
                                            <div onClick={() => {navigate(`/products/id/${filteredProduct.id}`)}} className="product-info" key={filteredProduct.id}>
                                                <img src={filteredProduct.imgUrl} className="product-image-sizing"/>
                                                <h3>{filteredProduct.name}</h3>
                                                <p>Price: ${filteredProduct.price}</p>
                                                {/* Add more product details */}
                                            </div>
                                            { !token ? null : <button onClick={() => {addToCart(filteredProduct)}} className="add-cart-button">Add to Cart</button>}
                                        </div>
                                        )) : null}

                                {petType === 'Dogs' && productType === 'Houses' ? sortedProducts.filter(product => product.petType === 'dog' && product.productType === 'house').map(filteredProduct => (
                                        <div>
                                            <div onClick={() => {navigate(`/products/id/${filteredProduct.id}`)}} className="product-info" key={filteredProduct.id}>
                                                <img src={filteredProduct.imgUrl} className="product-image-sizing"/>
                                                <h3>{filteredProduct.name}</h3>
                                                <p>Price: ${filteredProduct.price}</p>
                                                {/* Add more product details */}
                                            </div>
                                            { !token ? null : <button onClick={() => {addToCart(filteredProduct)}} className="add-cart-button">Add to Cart</button>}
                                        </div>
                                        )) : null}

                                {petType === 'Dogs' && productType === 'Cages' ? sortedProducts.filter(product => product.petType === 'dog' && product.productType === 'cage').map(filteredProduct => (
                                        <div>
                                            <div onClick={() => {navigate(`/products/id/${filteredProduct.id}`)}} className="product-info" key={filteredProduct.id}>
                                                <img src={filteredProduct.imgUrl} className="product-image-sizing"/>
                                                <h3>{filteredProduct.name}</h3>
                                                <p>Price: ${filteredProduct.price}</p>
                                                {/* Add more product details */}
                                            </div>
                                            { !token ? null : <button onClick={() => {addToCart(filteredProduct)}} className="add-cart-button">Add to Cart</button>}
                                        </div>
                                        )) : null}

                                {petType === 'Dogs' && productType === 'Accessories' ? sortedProducts.filter(product => product.petType === 'dog' && product.productType === 'accessory').map(filteredProduct => (
                                        <div>
                                            <div onClick={() => {navigate(`/products/id/${filteredProduct.id}`)}} className="product-info" key={filteredProduct.id}>
                                                <img src={filteredProduct.imgUrl} className="product-image-sizing"/>
                                                <h3>{filteredProduct.name}</h3>
                                                <p>Price: ${filteredProduct.price}</p>
                                                {/* Add more product details */}
                                            </div>
                                            { !token ? null : <button onClick={() => {addToCart(filteredProduct)}} className="add-cart-button">Add to Cart</button>}
                                        </div>
                                        )) : null}
                    
                    {petType === 'Cats' && productType === '' ? sortedProducts.filter(product => product.petType === 'cat').map(filteredProduct => (
                        <div>
                        <div onClick={() => {navigate(`/products/id/${filteredProduct.id}`)}} className="product-info" key={filteredProduct.id}>
                            <img src={filteredProduct.imgUrl} className="product-image-sizing"/>
                            <h3>{filteredProduct.name}</h3>
                            <p>Price: ${filteredProduct.price}</p>
                            {/* Add more product details */}
                        </div>
                        { !token ? null : <button onClick={() => {addToCart(filteredProduct)}} className="add-cart-button">Add to Cart</button>}
                        </div>
                    )) : null}

                                {petType === 'Cats' && productType === 'All' || '' ? sortedProducts.filter(product => product.petType === 'cat').map(filteredProduct => (
                                        <div>
                                            <div onClick={() => {navigate(`/products/id/${filteredProduct.id}`)}} className="product-info" key={filteredProduct.id}>
                                                <img src={filteredProduct.imgUrl} className="product-image-sizing"/>
                                                <h3>{filteredProduct.name}</h3>
                                                <p>Price: ${filteredProduct.price}</p>
                                                {/* Add more product details */}
                                            </div>
                                            { !token ? null : <button onClick={() => {addToCart(filteredProduct)}} className="add-cart-button">Add to Cart</button>}
                                        </div>
                                        )) : null}

                                {petType === 'Cats' && productType === 'Food' ? sortedProducts.filter(product => product.petType === 'cat' && product.productType === 'food').map(filteredProduct => (
                                        <div>
                                            <div onClick={() => {navigate(`/products/id/${filteredProduct.id}`)}} className="product-info" key={filteredProduct.id}>
                                                <img src={filteredProduct.imgUrl} className="product-image-sizing"/>
                                                <h3>{filteredProduct.name}</h3>
                                                <p>Price: ${filteredProduct.price}</p>
                                                {/* Add more product details */}
                                            </div>
                                            { !token ? null : <button onClick={() => {addToCart(filteredProduct)}} className="add-cart-button">Add to Cart</button>}
                                        </div>
                                        )) : null}

                                {petType === 'Cats' && productType === 'Toys' ? sortedProducts.filter(product => product.petType === 'cat' && product.productType === 'toy').map(filteredProduct => (
                                        <div>
                                            <div onClick={() => {navigate(`/products/id/${filteredProduct.id}`)}} className="product-info" key={filteredProduct.id}>
                                                <img src={filteredProduct.imgUrl} className="product-image-sizing"/>
                                                <h3>{filteredProduct.name}</h3>
                                                <p>Price: ${filteredProduct.price}</p>
                                                {/* Add more product details */}
                                            </div>
                                            { !token ? null : <button onClick={() => {addToCart(filteredProduct)}} className="add-cart-button">Add to Cart</button>}
                                        </div>
                                        )) : null}

                                {petType === 'Cats' && productType === 'Beds' ? sortedProducts.filter(product => product.petType === 'cat' && product.productType === 'bed').map(filteredProduct => (
                                        <div>
                                            <div onClick={() => {navigate(`/products/id/${filteredProduct.id}`)}} className="product-info" key={filteredProduct.id}>
                                                <img src={filteredProduct.imgUrl} className="product-image-sizing"/>
                                                <h3>{filteredProduct.name}</h3>
                                                <p>Price: ${filteredProduct.price}</p>
                                                {/* Add more product details */}
                                            </div>
                                            { !token ? null : <button onClick={() => {addToCart(filteredProduct)}} className="add-cart-button">Add to Cart</button>}
                                        </div>
                                        )) : null}

                                {petType === 'Cats' && productType === 'Scratchers' ? sortedProducts.filter(product => product.petType === 'cat' && product.productType === 'scratcher').map(filteredProduct => (
                                        <div>
                                            <div onClick={() => {navigate(`/products/id/${filteredProduct.id}`)}} className="product-info" key={filteredProduct.id}>
                                                <img src={filteredProduct.imgUrl} className="product-image-sizing"/>
                                                <h3>{filteredProduct.name}</h3>
                                                <p>Price: ${filteredProduct.price}</p>
                                                {/* Add more product details */}
                                            </div>
                                            { !token ? null : <button onClick={() => {addToCart(filteredProduct)}} className="add-cart-button">Add to Cart</button>}
                                        </div>
                                        )) : null}

                                {petType === 'Cats' && productType === 'Trees' ? sortedProducts.filter(product => product.petType === 'cat' && product.productType === 'tree').map(filteredProduct => (
                                        <div>
                                            <div onClick={() => {navigate(`/products/id/${filteredProduct.id}`)}} className="product-info" key={filteredProduct.id}>
                                                <img src={filteredProduct.imgUrl} className="product-image-sizing"/>
                                                <h3>{filteredProduct.name}</h3>
                                                <p>Price: ${filteredProduct.price}</p>
                                                {/* Add more product details */}
                                            </div>
                                            { !token ? null : <button onClick={() => {addToCart(filteredProduct)}} className="add-cart-button">Add to Cart</button>}
                                        </div>
                                        )) : null}

                                {petType === 'Cats' && productType === 'Litter Boxes' ? sortedProducts.filter(product => product.petType === 'cat' && product.productType === 'litter-box').map(filteredProduct => (
                                        <div>
                                            <div onClick={() => {navigate(`/products/id/${filteredProduct.id}`)}} className="product-info" key={filteredProduct.id}>
                                                <img src={filteredProduct.imgUrl} className="product-image-sizing"/>
                                                <h3>{filteredProduct.name}</h3>
                                                <p>Price: ${filteredProduct.price}</p>
                                                {/* Add more product details */}
                                            </div>
                                            { !token ? null : <button onClick={() => {addToCart(filteredProduct)}} className="add-cart-button">Add to Cart</button>}
                                        </div>
                                        )) : null}

                                {petType === 'Cats' && productType === 'Accessories' ? sortedProducts.filter(product => product.petType === 'cat' && product.productType === 'accessory').map(filteredProduct => (
                                        <div>
                                            <div onClick={() => {navigate(`/products/id/${filteredProduct.id}`)}} className="product-info" key={filteredProduct.id}>
                                                <img src={filteredProduct.imgUrl} className="product-image-sizing"/>
                                                <h3>{filteredProduct.name}</h3>
                                                <p>Price: ${filteredProduct.price}</p>
                                                {/* Add more product details */}
                                            </div>
                                            { !token ? null : <button onClick={() => {addToCart(filteredProduct)}} className="add-cart-button">Add to Cart</button>}
                                        </div>
                                        )) : null}

                    {petType === 'Birds' && productType === '' ? sortedProducts.filter(product => product.petType === 'bird').map(filteredProduct => (
                        <div>
                        <div onClick={() => {navigate(`/products/id/${filteredProduct.id}`)}} className="product-info" key={filteredProduct.id}>
                            <img src={filteredProduct.imgUrl} className="product-image-sizing"/>
                            <h3>{filteredProduct.name}</h3>
                            <p>Price: ${filteredProduct.price}</p>
                            {/* Add more product details */}
                        </div>
                        { !token ? null : <button onClick={() => {addToCart(filteredProduct)}} className="add-cart-button">Add to Cart</button>}
                        </div>
                    )) : null}

                                {petType === 'Birds' && productType === 'All' || '' ? sortedProducts.filter(product => product.petType === 'bird').map(filteredProduct => (
                                        <div>
                                            <div onClick={() => {navigate(`/products/id/${filteredProduct.id}`)}} className="product-info" key={filteredProduct.id}>
                                                <img src={filteredProduct.imgUrl} className="product-image-sizing"/>
                                                <h3>{filteredProduct.name}</h3>
                                                <p>Price: ${filteredProduct.price}</p>
                                                {/* Add more product details */}
                                            </div>
                                            { !token ? null : <button onClick={() => {addToCart(filteredProduct)}} className="add-cart-button">Add to Cart</button>}
                                        </div>
                                        )) : null}

                                {petType === 'Birds' && productType === 'Food' ? sortedProducts.filter(product => product.petType === 'bird' && product.productType === 'food').map(filteredProduct => (
                                        <div>
                                            <div onClick={() => {navigate(`/products/id/${filteredProduct.id}`)}} className="product-info" key={filteredProduct.id}>
                                                <img src={filteredProduct.imgUrl} className="product-image-sizing"/>
                                                <h3>{filteredProduct.name}</h3>
                                                <p>Price: ${filteredProduct.price}</p>
                                                {/* Add more product details */}
                                            </div>
                                            { !token ? null : <button onClick={() => {addToCart(filteredProduct)}} className="add-cart-button">Add to Cart</button>}
                                        </div>
                                        )) : null}

                                {petType === 'Birds' && productType === 'Toys' ? sortedProducts.filter(product => product.petType === 'bird' && product.productType === 'toy').map(filteredProduct => (
                                        <div>
                                            <div onClick={() => {navigate(`/products/id/${filteredProduct.id}`)}} className="product-info" key={filteredProduct.id}>
                                                <img src={filteredProduct.imgUrl} className="product-image-sizing"/>
                                                <h3>{filteredProduct.name}</h3>
                                                <p>Price: ${filteredProduct.price}</p>
                                                {/* Add more product details */}
                                            </div>
                                            { !token ? null : <button onClick={() => {addToCart(filteredProduct)}} className="add-cart-button">Add to Cart</button>}
                                        </div>
                                        )) : null}

                                {petType === 'Birds' && productType === 'Cages' ? sortedProducts.filter(product => product.petType === 'bird' && product.productType === 'cage').map(filteredProduct => (
                                        <div>
                                            <div onClick={() => {navigate(`/products/id/${filteredProduct.id}`)}} className="product-info" key={filteredProduct.id}>
                                                <img src={filteredProduct.imgUrl} className="product-image-sizing"/>
                                                <h3>{filteredProduct.name}</h3>
                                                <p>Price: ${filteredProduct.price}</p>
                                                {/* Add more product details */}
                                            </div>
                                            { !token ? null : <button onClick={() => {addToCart(filteredProduct)}} className="add-cart-button">Add to Cart</button>}
                                        </div>
                                        )) : null}

                                {petType === 'Birds' && productType === 'Accessories' ? sortedProducts.filter(product => product.petType === 'bird' && product.productType === 'accessory').map(filteredProduct => (
                                        <div>
                                            <div onClick={() => {navigate(`/products/id/${filteredProduct.id}`)}} className="product-info" key={filteredProduct.id}>
                                                <img src={filteredProduct.imgUrl} className="product-image-sizing"/>
                                                <h3>{filteredProduct.name}</h3>
                                                <p>Price: ${filteredProduct.price}</p>
                                                {/* Add more product details */}
                                            </div>
                                            { !token ? null : <button onClick={() => {addToCart(filteredProduct)}} className="add-cart-button">Add to Cart</button>}
                                        </div>
                                        )) : null}

                    {petType === 'Reptiles/Amphibians' && productType === '' ? sortedProducts.filter(product => product.petType === 'reptile-amphibian').map(filteredProduct => (
                        <div>
                        <div onClick={() => {navigate(`/products/id/${filteredProduct.id}`)}} className="product-info" key={filteredProduct.id}>
                            <img src={filteredProduct.imgUrl} className="product-image-sizing"/>
                            <h3>{filteredProduct.name}</h3>
                            <p>Price: ${filteredProduct.price}</p>
                            {/* Add more product details */}
                        </div>
                        { !token ? null : <button onClick={() => {addToCart(filteredProduct)}} className="add-cart-button">Add to Cart</button>}
                        </div>
                    )) : null}

                                {petType === 'Reptiles/Amphibians' && productType === 'All' || '' ? sortedProducts.filter(product => product.petType === 'reptile-amphibian').map(filteredProduct => (
                                        <div>
                                            <div onClick={() => {navigate(`/products/id/${filteredProduct.id}`)}} className="product-info" key={filteredProduct.id}>
                                                <img src={filteredProduct.imgUrl} className="product-image-sizing"/>
                                                <h3>{filteredProduct.name}</h3>
                                                <p>Price: ${filteredProduct.price}</p>
                                                {/* Add more product details */}
                                            </div>
                                            { !token ? null : <button onClick={() => {addToCart(filteredProduct)}} className="add-cart-button">Add to Cart</button>}
                                        </div>
                                        )) : null}

                                {petType === 'Reptiles/Amphibians' && productType === 'Food' ? sortedProducts.filter(product => product.petType === 'reptile-amphibian' && product.productType === 'food').map(filteredProduct => (
                                        <div>
                                            <div onClick={() => {navigate(`/products/id/${filteredProduct.id}`)}} className="product-info" key={filteredProduct.id}>
                                                <img src={filteredProduct.imgUrl} className="product-image-sizing"/>
                                                <h3>{filteredProduct.name}</h3>
                                                <p>Price: ${filteredProduct.price}</p>
                                                {/* Add more product details */}
                                            </div>
                                            { !token ? null : <button onClick={() => {addToCart(filteredProduct)}} className="add-cart-button">Add to Cart</button>}
                                        </div>
                                        )) : null}

                                {petType === 'Reptiles/Amphibians' && productType === 'Tanks' ? sortedProducts.filter(product => product.petType === 'reptile-amphibian' && product.productType === 'tank').map(filteredProduct => (
                                        <div>
                                            <div onClick={() => {navigate(`/products/id/${filteredProduct.id}`)}} className="product-info" key={filteredProduct.id}>
                                                <img src={filteredProduct.imgUrl} className="product-image-sizing"/>
                                                <h3>{filteredProduct.name}</h3>
                                                <p>Price: ${filteredProduct.price}</p>
                                                {/* Add more product details */}
                                            </div>
                                            { !token ? null : <button onClick={() => {addToCart(filteredProduct)}} className="add-cart-button">Add to Cart</button>}
                                        </div>
                                        )) : null}

                                {petType === 'Reptiles/Amphibians' && productType === 'Heating/Lighting' ? sortedProducts.filter(product => product.petType === 'reptile-amphibian' && product.productType === 'heating-lighting').map(filteredProduct => (
                                        <div>
                                            <div onClick={() => {navigate(`/products/id/${filteredProduct.id}`)}} className="product-info" key={filteredProduct.id}>
                                                <img src={filteredProduct.imgUrl} className="product-image-sizing"/>
                                                <h3>{filteredProduct.name}</h3>
                                                <p>Price: ${filteredProduct.price}</p>
                                                {/* Add more product details */}
                                            </div>
                                            { !token ? null : <button onClick={() => {addToCart(filteredProduct)}} className="add-cart-button">Add to Cart</button>}
                                        </div>
                                        )) : null}

                                {petType === 'Reptiles/Amphibians' && productType === 'Accessories' ? sortedProducts.filter(product => product.petType === 'reptile-amphibian' && product.productType === 'accessory').map(filteredProduct => (
                                        <div>
                                            <div onClick={() => {navigate(`/products/id/${filteredProduct.id}`)}} className="product-info" key={filteredProduct.id}>
                                                <img src={filteredProduct.imgUrl} className="product-image-sizing"/>
                                                <h3>{filteredProduct.name}</h3>
                                                <p>Price: ${filteredProduct.price}</p>
                                                {/* Add more product details */}
                                            </div>
                                            { !token ? null : <button onClick={() => {addToCart(filteredProduct)}} className="add-cart-button">Add to Cart</button>}
                                        </div>
                                        )) : null}
                
            </div>
        </div>
    );
};

export default ProductListing;