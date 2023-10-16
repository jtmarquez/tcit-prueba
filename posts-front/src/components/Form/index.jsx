import React, { useState } from "react";
import PropTypes from 'prop-types';
import FormField from "../FormField";
import './form.css';

const Form = (props) => {
    const { formFields, onSubmit, submitText } = props;

    const [values, setValues] = useState({});

    const onChange = (field, e) => {
        const value = e.target.value;
        setValues((prev) => ({...prev, [field.name]: value }));
    }

    const handleOnSubmit = () => {
        onSubmit(values);
        setValues({});
    }

    return (
        <div className="form-container">
            {formFields.map((field) => <FormField {...field} onChange={onChange} value={values[field.name]} />)}
            <button onClick={handleOnSubmit}>{submitText}</button>
        </div>    
    )
}

Form.defaultProps = {
    submitText: "Crear",
}

Form.propTypes = {
    formFields: PropTypes.arrayOf(PropTypes.shape({...FormField.propTypes, name: PropTypes.string })),
    onSubmit: PropTypes.func.isRequired,
    submitText: PropTypes.string,
}

export default Form;