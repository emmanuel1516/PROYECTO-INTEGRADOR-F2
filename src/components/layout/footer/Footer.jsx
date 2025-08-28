import { Text } from "@/components/texts";
import "./footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <Text className="footer__copyright" variant="p">
                &copy;2025 Todos los derechos reservados
            </Text>
        </footer>
    );
};

export default Footer;