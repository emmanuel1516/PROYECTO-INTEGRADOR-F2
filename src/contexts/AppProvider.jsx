import PropTypes from "prop-types";
import AppContext from "./AppContext";
import { useProduct } from "@/hooks/useProduct";

const AppProvider = (props) => {
    const { children } = props;
    const productsContext = useProduct();

    return (
        <AppContext.Provider
            value={{
                productsContext,
            }}>
            {children}
        </AppContext.Provider>
    );
};

AppProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppProvider;