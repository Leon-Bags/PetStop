import { useState } from "react"

function SingleProduct({ products }) {

    const [detailed, setDetailed] = useState(false);

    return (

        <div>
            <img className="img-url" src={products.imageUrl} alt={products.name} />
            <h3 className="h3">{products.name} </h3>
            <p>Price: ${products.price} </p>

            {detailed && (
                <>
                    <p>Item Description: {products.description}</p>
                    <p>Availability: {products.inStock}</p>
                    <p>In Stock: {products.quantity}</p>
                </>
            )}

            <button className="button-expand" onClick={() => setDetailed(!detailed)}>
                {detailed ? 'Hide Details' : 'Expand Details'}
            </button>





        </div>


    );


}

export default SingleProduct