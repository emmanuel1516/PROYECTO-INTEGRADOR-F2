import PropTypes from "prop-types";
import AppContext from "./AppContext";
import { useProduct } from "@/hooks/useProduct";
import { useShoppingCart } from "@/hooks/useShoppingCart";

const AppProvider = (props) => {
    const { children } = props;
    const productsContext = useProduct();
    const shoppingCartContext = useShoppingCart();

    return (
        <AppContext.Provider
            value={{
                productsContext,
                shoppingCartContext,
            }}>
            {children}
        </AppContext.Provider>
    );
};

AppProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppProvider;