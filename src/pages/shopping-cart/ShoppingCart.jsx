import { AlertDanger } from "@/components/alerts";
import AlertSuccessForm from "@/components/alerts/AlertSuccessForm";

import { Text } from "@/components/texts";
import AppContext from "@/contexts/AppContext";
import { useProduct } from "@/hooks/useProduct";

import { useContext, useState } from "react";
import ConsumerForm from "./consumer-form/ConsumerForm";
import ProductsTable from "./products-table/ProductsTable";
import "./shopping-cart.scss";

const ShoppingCart = () => {
    const { shoppingCartContext } = useContext(AppContext);
    const { shoppingCart, addArticle, subtractArticle, clearCart } = shoppingCartContext;
    const [ alertError, setAlertError ] = useState({ open: false, message: "" });
    const [ alertSuccess, setAlertSuccess ] = useState({ open: false, message: "" });

    const handleClear = () => {
        clearCart();
    };

    const { fetchProductById, updateProduct } = useProduct();

    const handleBuy = async (consumer) => {
        const items = shoppingCart.articles ?? [];

        if (items.length === 0) {
            setAlertError({
                open: true,
                message: "No hay productos en el carrito.",
            });
            return false;
        }
        const products = await Promise.all(items.map((i) => fetchProductById(i.id)));

        const insuficientes = [];
        for (let i = 0; i < items.length; i++) {
            const cartItem = items[i];
            const prod = products[i];
            const stockActual = prod?.stock ?? 0;

            if (!prod || cartItem.quantity > stockActual) {
                insuficientes.push({ id: cartItem.id, name: cartItem.name });
            }
        }

        if (insuficientes.length > 0) {
            setAlertError({
                open: true,
                message: "Hay productos con stock insuficiente",
            });
            return false;
        }

        await Promise.all(
            items.map((cartItem, idx) => {
                const prod = products[idx];
                const nuevoStock = (prod.stock ?? 0) - cartItem.quantity;
                return updateProduct(prod.id, { stock: nuevoStock });
            }),
        );

        const order = {
            id: Date.now(),
            consumer,
            items,
            totalQuantity: shoppingCart.totalQuantity,
            totalAmount: shoppingCart.totalAmount,
            createdAt: new Date().toISOString(),
        };
        const prev = JSON.parse(localStorage.getItem(ORDERS_KEY) || "[]");
        localStorage.setItem(ORDERS_KEY, JSON.stringify([ order, ...prev ]));

        setAlertSuccess({
            open: true,
            message: "¡Compra realizada con éxito!",
        });
        clearCart();

        return true;

    };

    return (
        <div className="shopping-cart">
            <Text variant="h2">Carrito</Text>
            <ProductsTable
                articles={shoppingCart.articles}
                addArticle={addArticle}
                subtractArticle={subtractArticle}
                totalAmount={shoppingCart.totalAmount}/>

            <ConsumerForm
                onCancel={handleClear}
                onBuy={handleBuy}
                isCartEmpty={(shoppingCart.articles?.length ?? 0) === 0}/>
            {alertError.open && (
                <AlertDanger
                    open={alertError.open}
                    message={alertError.message}
                    onClose={() => setAlertError({ open: false, message: "" })}/>
            )}
            {alertSuccess.open && (
                <AlertSuccessForm
                    open={alertSuccess.open}
                    message={alertSuccess.message}
                    onClose={() => setAlertSuccess({ open: false, message: "" })}/>
            )}

        </div>
    );
};

export default ShoppingCart;