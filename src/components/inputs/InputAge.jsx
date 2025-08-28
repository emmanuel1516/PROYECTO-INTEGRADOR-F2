import PropTypes from "prop-types";
import Input from "./Input";

const InputAge = (props) => {
    const {
        id,
        name,
        label,
        value,
        onChange,
        onBlur,
        error,
        helperText,
        ...restProps
    } = props;

    return (
        <Input
            type="number"
            id={id || name}
            name={name}
            label={label}
            value={value}
            placeholder="Ingresa tu edad"
            min={18}
            max={100}
            step={1}
            onChange={onChange}
            onBlur={onBlur}
            error={error}
            helperText={helperText}
            {...restProps}/>
    );
};

InputAge.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    error: PropTypes.bool,
    helperText: PropTypes.string,
};

export default InputAge;