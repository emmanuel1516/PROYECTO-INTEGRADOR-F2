import React, { useContext } from "react";
import "./product-gallery.scss";
import AppContext from "@/contexts/AppContext";
import ProductItem from "../product-item/ProductItem";

const ProductGallery = () => {
    const { productsContext } = useContext(AppContext);
    const { products, isLoading } = productsContext;

    return (
        <div className="product-gallery">
            {products.map((product) => (
                <ProductItem
                    key={product.id}
                    product={product}
                    isLoading={isLoading}/>
            ))}
        </div>
    );
};

export default ProductGallery;