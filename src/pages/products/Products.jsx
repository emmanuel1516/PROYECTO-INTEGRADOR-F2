import { ButtonPrimary } from "@/components/buttons";
import { Text } from "@/components/texts";
import AppContext from "@/contexts/AppContext";
import { useContext } from "react";
import ProductGallery from "./product-gallery/ProductGallery";
import "./products.scss";

const product = {
    id:null,
    title:"test1",
    description:"lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price:1500,
    stock:5,
    imagePath: "/assets/images/img01.jpg",
    imageAlt: "Imagen de producto",

};
const Products = () => {
    const { productsContext } = useContext(AppContext);
    const { createProduct } = productsContext;

    const handleCreateProduct = () => {
        console.log("Crear producto", product);
        createProduct(product);
    };

    return (
        <div className="products">
            <Text variant="h2">Productos</Text>
            <ButtonPrimary onClick={handleCreateProduct}>Crear Producto</ButtonPrimary>
            <ProductGallery />
        </div>
    );
};

export default Products;