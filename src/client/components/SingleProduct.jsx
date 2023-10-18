import React from 'react'
import { useState , useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { fetchUsersById } from '../api/UsersAjaxHelper';
import fetchProducts, { deleteProduct } from '../api/ProductsAjaxHelper';
import postReview from '../api/ReviewsAjaxHelper';
import { updateProduct } from '../api/ProductsAjaxHelper';

const SingleProduct = ({ products, setProducts , reviews, token, addToCart }) => {

    const { productId } = useParams();

    const productIdNumberfy = parseInt(productId)

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [date, setDate] = useState('')
    const [userId, setUserId] = useState(window.localStorage.getItem("userId"));
    const [adminUser, setAdminUser] = useState({});
    const [changeProduct, setChangeProduct] = useState('')

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [petType, setPetType] = useState('');
    const [productType, setProductType] = useState('');
    const [inStock, setInStock] = useState('');
    const [isPopular, setIsPopular] = useState('');
    const [imgUrl, setImgUrl] = useState('');

    const[stateHandler, setStateHandler] = useState(false)

    // const { productId } = useParams();

    // const productIdNumberfy = parseInt(productId)

    const navigate = useNavigate()

    // async function GetProductId() {

    // products.filter(product => product.id === productIdNumberfy)

    // setProductId(products.id)

    // }

    // GetProductId()

    if (userId === null) {
        setUserId(1)
    } else {
        null
    }

    const deleteProductById = async (e) => {
        e.preventDefault();
            try {
                const response = await deleteProduct(productId)
                console.log(response)
                refetchProductListing();
                navigate("/products")
            } catch (err) {
                console.error(err)
            }
        }

        const refetchProductListing = async () => {
            const proudcts = await fetchProducts();
            setProducts(proudcts);
        }

        useEffect(() => {
            const getUsersById = async () => {
                try {
                    const response = await fetchUsersById(userId)
                    console.log(response.user)
                    setAdminUser(response.user)
                } catch (err) {
                    console.error(err)
                }
            }
            getUsersById();
        }, [])

        async function submitUpdateProduct(e) {
            e.preventDefault();
    
                const product = {
                    product: {
                        name,
                        description,
                        price,
                        quantity,
                        petType,
                        productType,
                        inStock,
                        isPopular,
                        imgUrl,
                    }
                };
    
            
                const response = await updateProduct(product, productId, token);
                console.log(response)
        
            }

            

    async function submitReview(e) {
        e.preventDefault();

            const review = {
                review: {
                    title,
                    content,
                    date,
                    productId,
                    userId,
                }
            };

        
            const response = await postReview(review, token);
            console.log(response)
    
        }

    // console.log(userId)

    // console.log(productIdNumberfy)

    // console.log(products)

    // useEffect(() => {
    //     const product = products.find((product) => product.id === productIdNumberfy)
    //     return product

    // }, [productId])

    return (
        <>
                {products.filter(product => product.id === productIdNumberfy).map(filteredProduct => (
                    <div className="single-product-div" key={filteredProduct.id}>
                        <div className="single-product-img-div" key={filteredProduct.id}>
                            <img src={filteredProduct.imgUrl} className="single-product-image-sizing"/>
                        </div>
                        <div className="single-product-info-div">
                            <h3 className="single-product-name">{filteredProduct.name}</h3>
                            <p className="single-product-desc">{filteredProduct.description}</p>
                            <p className="single-product-price">${filteredProduct.price}</p>
                            <br></br><br></br>

                            { !token ? null : <button className="single-product-cart-button" onClick={() => addToCart(filteredProduct)}>Add To Cart</button>}
                            {/* Add more product details */}            
                       </div>
                    </div>
                        
                    ))}

            {adminUser.isAdministrator ?
            <div>
                <button className="product-update-button" onClick={() => {setStateHandler(true)}}>Update</button>
                <button className="product-delete-button" onClick={(e) => {deleteProductById(e)}} >Delete</button>
            </div> : null }

            {stateHandler === true ?
            <div className="update-product-form">
                {products.filter(product => product.id === productIdNumberfy).map(filteredProduct => (
                <form onSubmit={submitUpdateProduct}>
                <div className="form-div">
                        <label className="form-label" for="name">Name</label>
                    <br></br>
                        <input className="product-name-box"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)} id="name"
                            placeholder="Name" 
                            required />
                    </div>

                    <div className="form-div">
                        <label className="form-label" for="description">Description</label>
                    <br></br>
                        <textarea
                            className="product-desc-box"
                            rows={4}
                            cols={40}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                                    />
                    </div>

                    <div className="form-div">
                        <label className="form-label" for="price">Price</label>
                    <br></br>
                        <input type="text" id="price"
                            className="product-price-box"
                            // initialValue={filteredProduct.price}
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            placeholder="Price"
                            required />
                    </div>

                    <div className="form-div">
                        <label className="form-label">Quantity</label>
                    <br></br>
                        <input
                            className="product-quantity-box"
                            type="text"
                            // value={filteredProduct.quantity}
                            value={quantity}
                            placeholder="Quantity"
                            onChange={(e) => setQuantity(e.target.value)}
                            required />

                    </div>

                    <div className="form-div">
                        <label className="form-label">Pet Type</label>
                    <br></br>
                            <input
                                type="radio"
                                name="petType"
                                value='dog'
                                onChange={(e) => setPetType(e.target.value)}/>
                                Dog
                            <input
                                type="radio"
                                name="petType"
                                value='cat'
                                onChange={(e) => setPetType(e.target.value)}/>
                                Cat
                            <input
                                type="radio"
                                name="petType"
                                value='bird'
                                onChange={(e) => setPetType(e.target.value)}/>
                                Bird
                            <input
                                type="radio"
                                name="petType"
                                value='reptile-amphibian'
                                onChange={(e) => setPetType(e.target.value)}/>
                                Reptile

                    </div>
                    <div className="form-div">
                        <label className="form-label">Product Type</label>
                    <br></br>
                        <input
                                type="radio"
                                name="productType"
                                value='food'
                                onChange={(e) => setProductType(e.target.value)}/>
                                Food
                            <input
                                type="radio"
                                name="productType"
                                value='toy'
                                onChange={(e) => setProductType(e.target.value)}/>
                                Toy
                            <input
                                type="radio"
                                name="productType"
                                value='bed'
                                onChange={(e) => setProductType(e.target.value)}/>
                                Bed
                            <input
                                type="radio"
                                name="productType"
                                value='house'
                                onChange={(e) => setProductType(e.target.value)}/>
                                House
                            <input
                                type="radio"
                                name="productType"
                                value='cage'
                                onChange={(e) => setProductType(e.target.value)}/>
                                Cage
                            <input
                                type="radio"
                                name="productType"
                                value='scratcher'
                                onChange={(e) => setProductType(e.target.value)}/>
                                Scratcher
                        <br></br>
                            <input
                                type="radio"
                                name="productType"
                                value='tree'
                                onChange={(e) => setProductType(e.target.value)}/>
                                Tree
                            <input
                                type="radio"
                                name="productType"
                                value='litter-box'
                                onChange={(e) => setProductType(e.target.value)}/>
                                Litter Box
                            <input
                                type="radio"
                                name="productType"
                                value='accessory'
                                onChange={(e) => setProductType(e.target.value)}/>
                                Accessory
                            <input
                                type="radio"
                                name="productType"
                                value='tank'
                                onChange={(e) => setProductType(e.target.value)}/>
                                Tank
                            <input
                                type="radio"
                                name="productType"
                                value='heating-lighting'
                                onChange={(e) => setProductType(e.target.value)}/>
                                Heating/Lighting

                    </div>
                    <div className="form-div">
                        <label className="form-label">In Stock</label>
                    <br></br>
                            <input
                                type="radio"
                                name="inStock"
                                value={true}
                                onChange={(e) => setInStock(e.target.true)}/>
                                Yes
                            <input
                                type="radio"
                                name="inStock"
                                value={false}
                                onChange={(e) => setInStock(e.target.false)}/>
                                No
                    </div>
                    <div className="form-div">
                        <label className="form-label">Is Popular</label>
                    <br></br>
                        <input
                                type="radio"
                                name="isPopular"
                                value={true}
                                onChange={(e) => setIsPopular(e.target.true)}/>
                                Yes
                            <input
                                type="radio"
                                name="isPopular"
                                value={false}
                                onChange={(e) => setIsPopular(e.target.false)}/>
                                No

                    </div>
                    <div className="form-div">
                        <label className="form-label">Image URL</label>
                    <br></br>
                        <input
                            className="product-imgUrl-box"
                            type="text"
                            // initialValue={filteredProduct.imgUrl}
                            value={imgUrl}
                            placeholder="Image URL"
                            onChange={(e) => setImgUrl(e.target.value)}
                            required />
                        </div>
                        <button className="product-update-delete-buttons" >Update Product</button>
                    </form>
            ))}    </div> : null }
<br></br>
            {userId === 1 ? null :
            <form onSubmit={submitReview}>
                <div className="review-info">
                    <h2>Add a Review!</h2>
                <div className="form-div">
                        <label className="form-label" for="title">Title</label>
                        <input className="form-input"
                            type="text" value={title}
                            onChange={(e) => setTitle(e.target.value)} id="title" placeholder="Title" />
                    </div>

                    <div className="form-div">
                        <label className="form-label" for="content">Content </label>
                        <input type="text" name="" id="content" value={content}
                            className="form-input" onChange={(e) => setContent(e.target.value)} placeholder="Content" />
                    </div>
                </div>
                <button type="submit" className="submitButton">Add Review</button>
                </form> }

                <h2>Product Reviews</h2>

                {reviews.filter(review => review.productId === productIdNumberfy).map(filteredReview => (
                        <div className="product-review-info" key={filteredReview.id}>
                            <h3>{filteredReview.title}</h3>
                            <p>{filteredReview.content}</p>
                            <p>{filteredReview.date}</p>
                            <div className="line-break"></div>
                        </div>
                    ))}
        </>
    )
}
export default SingleProduct




/*

import React, { useEffect, useState } from 'react';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';

function ProductDetail({ productId }) {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch product details for the specified productId
        fetch(`http://localhost:3000/api/products/id/`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setProduct(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, [productId]);

    if (loading) {
        return <div>Loading product details...</div>;
    }

    if (error) {
        return <div>Error fetching product details: {error.message}</div>;
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <p>Description: {product.description}</p>
            <p>Price: ${product.price}</p>

           

          
            <ReviewForm productId={productId} />

          
            <ReviewList productId={productId} />
        </div>
    );
}

export default ProductDetail;

*/

