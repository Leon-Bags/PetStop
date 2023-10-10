import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createProduct } from '../api/ProductsAjaxHelper';

const AddProduct = ({setToken}) => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [petType, setPetType] = useState('');
    const [productType, setProductType] = useState('');
    const [inStock, setInStock] = useState()
    const [isPopular, setIsPopular] = useState();
    const [imgUrl, setImgUrl] = useState('');

    const navigate = useNavigate()

    async function submitProduct(e) {
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

            try{
            const response = await createProduct(product);
                console.log(response)
                alert("Product added!")
                navigate("/products")
            } catch(error) {
                console.log(error)
            }
        }

    return (
        <div className="form">
            <div className="form-body">
                <form onSubmit={submitProduct}>

                    <h1>Add Product</h1>

                    <div className="form-div">
                        <label className="form-label" for="name">Name: </label>
                    <br></br>
                        <input className="form-input"
                            type="text" value={name}
                            onChange={(e) => setName(e.target.value)} id="name"
                            placeholder="Name" 
                            required />
                    </div>

                    <div className="form-div">
                        <label className="form-label" for="description">Description: </label>
                    <br></br>
                        <textarea
                            rows={4}
                            cols={40}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                                    />
                    </div>

                    <div className="form-div">
                        <label className="form-label" for="price">Price: </label>
                    <br></br>
                        <input type="text" id="price"
                            className="form-input"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            placeholder="Price"
                            required />
                    </div>

                    <div className="form-div">
                        <label className="form-label">Quantity: </label>
                    <br></br>
                        <input
                            type="text"
                            value={quantity}
                            placeholder="Quantity"
                            onChange={(e) => setQuantity(e.target.value)}
                            required />

                    </div>

                    <div className="form-div">
                        <label className="form-label">Pet Type: </label>
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
                        <label className="form-label">Product Type: </label>
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
                        <label className="form-label">In Stock: </label>
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
                        <label className="form-label">Is Popular: </label>
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
                        <label className="form-label">Image URL: </label>
                    <br></br>
                        <input
                            type="text"
                            value={imgUrl}
                            placeholder="Image URL"
                            onChange={(e) => setImgUrl(e.target.value)}
                            required />

                    </div>



                    <button type="submit" className="add-product-button">Add</button>
                </form></div>

        </div>
    );
}

export default AddProduct;