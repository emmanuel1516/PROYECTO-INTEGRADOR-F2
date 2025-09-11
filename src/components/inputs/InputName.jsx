import PropTypes from "prop-types";
import Input from "./Input";

const InputName = (props) => {
    const {
        id,
        name,
        label,
        value,
        onChange,
        onBlur,
        error,
        helperText,
        maxLength = 25,
        ...restProps
    } = props;

    return (
        <Input
            type="text"
            id={id || name}
            name={name}
            label={label}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            error={error}
            helperText={helperText}
            inputProps={{ maxLength }}
            {...restProps}/>
    );
};

InputName.propTypes = {
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

export default InputName;