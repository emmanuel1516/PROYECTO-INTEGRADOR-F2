import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import { InputAdornment } from "@mui/material";
import PropTypes from "prop-types";
import Input from "./Input";

const InputPhone = (props) => {
    const {
        id,
        name,
        label,
        value,
        onChange,
        onBlur,
        error,
        helperText,
        maxLength = 15,
        ...restProps
    } = props;

    return (
        <Input
            type="tel"
            id={id || name}
            name={name}
            label={label}
            value={value}
            placeholder="Ingresa tu número de teléfono"
            onChange={onChange}
            onBlur={onBlur}
            error={error}
            helperText={helperText}
            endAdornment={<InputAdornment position="end"><LocalPhoneOutlinedIcon/></InputAdornment>}
            inputProps={{ maxLength }}
            {...restProps}/>
    );
};

InputPhone.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    error: PropTypes.bool,
    helperText: PropTypes.string,
    maxLength: PropTypes.number,
};

export default InputPhone;