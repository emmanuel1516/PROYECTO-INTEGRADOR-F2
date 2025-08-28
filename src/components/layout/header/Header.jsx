import { Text } from "@/components/texts";
import "./header.scss";

const Header = () => {
    return (
        <header className="header">
            <Text className="header__title" variant="h1">Mi App</Text>
        </header>
    );
};

export default Header;