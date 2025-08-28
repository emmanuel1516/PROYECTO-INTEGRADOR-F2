import { useEffect, useState } from "react";
const shoppingCart = {
    items: [{
        id,
        quantity,
        price,
    }],
    totalUnits,
    totalAmount,
};
function addItem(item) {
    setState((prevProps) => ({
        ...prevProps,
        items: [ ...prev.items, item ],
    }));
}
export const useShoppingCart = () => {
    const [ shoppingCart, setShoppingCart ] = useState({});

    const addItem = (item) => {
        const items = [ ...shoppingCart.items, item ];
        setShoppingCart(items);
    };

    const update = (id, data) => {

        const product = { ...getById(id), ...data };
        const index = products.findIndex((item) => item.id === parseInt(id));
        products[index] = product;

        const collection = [...products];
        localStorage.setItem("products", JSON.stringify(collection));
        setProducts(collection);

    };

    const remove = (id) => {
        setIsLoading(true);

        const product = getById(id);
        const collection = products.filter((item) => item.id != product.id);

        localStorage.setItem("products", JSON.stringify(collection));
        setProducts(collection);

        setIsLoading(false);
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
    };
};