import { useEffect, useState } from "react";

export const useProduct = () => {
    const [ products, setProducts ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);

    const generateId = () => {
        let maxId = 0;
        products.forEach((item) => {
            if (item.id > maxId){
                maxId = item.id;
            }
        });

        return maxId + 1;
    };

    const get = () => {
        setIsLoading(true);

        const collection = JSON.parse(localStorage.getItem("products")) || [];
        setProducts(collection);

        setIsLoading(true);
        return collection;
    };

    const getById = (id) => {
        setIsLoading(true);

        const collection = JSON.parse(localStorage.getItem("products")) || [];
        const product = collection.find((item) => item.id === parseInt(id));

        if (!product) {
            throw new Error("Producto no encontrado.");
        }

        setIsLoading(false);

        return product;
    };

    const create = (newProduct) => {
        setIsLoading(true);

        const collection = [ ...products, { ...newProduct, id: generateId() }];
        localStorage.setItem("products", JSON.stringify(collection));
        setProducts(collection);

        setIsLoading(false);
    };

    const update = (id, data) => {
        setIsLoading(true);

        const product = { ...getById(id), ...data };
        const index = products.findIndex((item) => item.id === parseInt(id));
        products[index] = product;

        const collection = [...products];
        localStorage.setItem("products", JSON.stringify(collection));
        setProducts(collection);

        setIsLoading(false);
    };

    const remove = (id) => {
        setIsLoading(true);

        const product = getById(id);
        const collection = products.filter((item) => item.id != product.id);

        localStorage.setItem("products", JSON.stringify(collection));
        setProducts(collection);

        setIsLoading(false);
    };

    const hasStock = (id, quantity) =>{
        setIsLoading(true);

        const product = getById(id);

        setIsLoading(false);
        return quantity <= product.stock;
    };

    useEffect(() => {
        get();
    }, []);

    return {
        products,
        isLoading,
        get,
        getById,
        create,
        update,
        remove,
        hasStock,
    };
};