import { ButtonPrimary } from "@/components/buttons";
import { Text } from "@/components/texts";
import AppContext from "@/contexts/AppContext";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useContext } from "react";
import "./shopping-cart.scss";

const ShoppingCart = () => {
    const { shoppingCartContext } = useContext(AppContext);
    const { shoppingCart, addArticle, subtractArticle } = shoppingCartContext;

    const renderActions = (article) => {
        return (
            <>
                <ButtonPrimary
                    className="product-item__remove"
                    size="sm"
                    onClick={() => subtractArticle(article.id, 1)}>
                    <RemoveCircleOutlineIcon />
                </ButtonPrimary>

                <ButtonPrimary
                    className="product-item__add"
                    size="sm"
                    onClick={() => addArticle(article.id, 1)}>
                    <AddShoppingCartIcon />
                </ButtonPrimary>
            </>
        );
    };

    const formatPrice = (value) => {
        return new Intl.NumberFormat("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(Number(value));
    };

    return (
        <div className="shopping-cart">
            <Text variant="h2">Carrito</Text>

            <Table>
                <TableHead>
                    <TableRow className="table__head">
                        <TableCell align="left">Producto</TableCell>
                        <TableCell align="right">Cant.</TableCell>
                        <TableCell align="right">Precio</TableCell>
                        <TableCell align="right">Importe</TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {shoppingCart.articles?.map((article) => (
                        <TableRow key={article.id} className="table__body">
                            <TableCell align="left">{article.name}</TableCell>
                            <TableCell align="right">{article.quantity}</TableCell>
                            <TableCell align="right">${formatPrice(article.price?.toFixed(2))}</TableCell>
                            <TableCell align="right">${formatPrice(article.amount?.toFixed(2))}</TableCell>
                            <TableCell className="table__body-actions" align="right">{renderActions(article)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <div className="table__footer">
                <Text className="table__total" variant="p">
          Total: ${formatPrice(shoppingCart.totalAmount?.toFixed(2))}
                </Text>
            </div>
        </div>
    );
};

export default ShoppingCart;