import React from "react";
import SingleProduct from "./SingleProduct";

export default function ProductListing({ products }) {

    return (products.map((element, key) =>

        <SingleProduct products={element} key={key} />

    ));
}