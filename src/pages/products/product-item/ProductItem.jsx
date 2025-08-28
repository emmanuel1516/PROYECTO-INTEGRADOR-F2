import { ButtonPrimary } from "@/components/buttons";
import { Skeleton } from "@/components/skeleton";
import { Text } from "@/components/texts";
import { CardActionArea, Card as MuiCard } from "@mui/material";
import PropTypes from "prop-types";
import "./product-item.scss";

const ProductItem = (props) => {
    const {
        product,
        isLoading,
        className,
        ...restProps
    } = props;

    const classes = `product-item ${className ?? ""}`;

    return (
        <MuiCard className={classes} {...restProps}>
            <Skeleton className="product-item__image--skeleton" isLoading={isLoading}>
                <CardActionArea>
                    <img className="product-item__image" src={`./src/${product.imagePath}`} alt={product.imageAlt}/>
                </CardActionArea>
            </Skeleton>

            <div className="product-item__content">
                <Skeleton className="product-item__title--skeleton" isLoading={isLoading}>
                    <Text className="product-item__title" variant="h3">{product.title}</Text>
                </Skeleton>
                <Skeleton className="product-item__description--skeleton" isLoading={isLoading}>
                    <Text className="product-item__description" variant="p">{product.description}</Text>
                </Skeleton>
                <Skeleton className="product-item__price--skeleton" isLoading={isLoading}>
                    <Text className="product-item__price" variant="span">${product.price.toFixed(2)}</Text>
                </Skeleton>
            </div>

            <div className="product-item__actions">
                <Skeleton className="product-item__actions--skeleton" isLoading={isLoading}>
                    <ButtonPrimary size="sm">+</ButtonPrimary>
                </Skeleton>
                <Skeleton className="product-item__actions--skeleton" isLoading={isLoading}>
                    <ButtonPrimary size="sm">-</ButtonPrimary>
                </Skeleton>
            </div>
        </MuiCard>
    );
};

ProductItem.propTypes = {
    product: PropTypes.shape({
        imagePath: PropTypes.string.isRequired,
        imageAlt:PropTypes.string.isRequired,
        title:PropTypes.string.isRequired,
        description:PropTypes.string.isRequired,
        price:PropTypes.number.isRequired,
        stock:PropTypes.number.isRequired,
    }),
    isLoading: PropTypes.bool.isRequired,
    className: PropTypes.string,
};

export default ProductItem;