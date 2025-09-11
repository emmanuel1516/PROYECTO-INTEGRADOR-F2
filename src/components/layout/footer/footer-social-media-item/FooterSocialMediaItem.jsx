import React from "react";
import "./footer-social-media-item.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Text } from "@/components/texts";

const FooterSocialMediaItem = (props) => {
    const { item, className, ...restProps } = props;
    const classes = `footer-social-media-item ${className}`;

    return (

        <li className={classes} {...restProps}>
            <Link to={item.path}>
                <Text className="footer-social-media-item__label" variant="span">{item.label}</Text>
            </Link>
        </li>
    );
};

FooterSocialMediaItem.propTypes = {
    item: PropTypes.shape({
        path: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
    }),
    className: PropTypes.string,
};

export default FooterSocialMediaItem;