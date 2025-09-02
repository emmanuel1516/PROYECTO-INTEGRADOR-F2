import { IconButtonBadge } from "@/components/icon-buttons";
import AppContext from "@/contexts/AppContext";
import { ShoppingCart as ShoppingCartIcon } from "@mui/icons-material";
import { useContext } from "react";
import "./header.scss";
import InstitutionLogo from "./institution-logo/InstitutionLogo";

const Header = () => {
    const { shoppingCartContext } = useContext(AppContext);
    const { shoppingCart } = shoppingCartContext;

    return (
        <header className="header">
            <InstitutionLogo className="header_institution"/>
            <IconButtonBadge
                className="header__shopping-cart"
                badgeContent={shoppingCart.totalQuantity ?? 0}>
                <ShoppingCartIcon/>
            </IconButtonBadge>

        </header>
    );
};

export default Header;