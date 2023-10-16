import React from "react";
import PropTypes from "prop-types";
import './formField.css';

const FormField = (props) => {
    const { type, name, placeholder = props.name, onChange, value } = props;

    const handleOnInputChange = (e) => {
        onChange({ type, placeholder, name }, e);
    }

    if (type == "string") {
        return (
            <div>
                <input className="ff-input" placeholder={placeholder} onChange={handleOnInputChange} value={value ?? ''}/>
            </div>
        );
    }

    return (
        <div>
            <input className="ff-input" placeholder={placeholder} onChange={handleOnInputChange} value={value ?? ''}/>
        </div>
    );
};

FormField.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string]),
    onChange: PropTypes.func,
    type: PropTypes.oneOf(["string"]).isRequired,
    placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default FormField;
