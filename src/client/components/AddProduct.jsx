import { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import fetchProducts, { createProduct } from '../api/ProductsAjaxHelper';
import { fetchUsersById } from '../api/UsersAjaxHelper';

const AddProduct = ({ setProducts }) => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [petType, setPetType] = useState('');
    const [productType, setProductType] = useState('');
    const [inStock, setInStock] = useState()
    const [isPopular, setIsPopular] = useState();
    const [imgUrl, setImgUrl] = useState('');

    const [userId, setUserId] = useState(window.localStorage.getItem("userId"));
    const [adminUser, setAdminUser] = useState({})

    const navigate = useNavigate()

    if (userId === null) {
        setUserId(1)
    } else {
        null
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
                await refetchProductListing();
                alert("Product added!")
                navigate("/products")
            } catch(error) {
                console.log(error)
            }
        }
    const refetchProductListing = async () => {
        const proudcts = await fetchProducts();
        setProducts(proudcts);
    }

    return (
        <div className="form">
            {adminUser.isAdministrator ?
            <div className="add-product-div">
                <div className="add-product-left">
                <form onSubmit={submitProduct}>

                    <h1>Add Product</h1>

                    <div className="form-div">
                        <label className="form-label" for="name">Name</label>
                    <br></br>
                        <input className="product-name-box"
                            type="text" value={name}
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
                            value={imgUrl}
                            placeholder="Image URL"
                            onChange={(e) => setImgUrl(e.target.value)}
                            required />

                    </div>
                            <button type="submit" className="add-product-button">Add</button>
                </form>
                </div>
                <div className="add-product-right">

                </div>
            </div> : <h2>You must be an Administrator to access this page.</h2> }
        </div>
    );
}

export default AddProduct;