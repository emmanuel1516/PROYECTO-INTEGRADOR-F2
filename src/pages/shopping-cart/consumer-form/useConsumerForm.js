import { useFormik } from "formik";
import { useState } from "react";
import { initialValues } from "./consumer-form.initial-value.js";
import { validationSchema } from "./consumer-form.validation-schema.js";

const useConsumerForm = () => {
    const [ isSubmitted, setIsSubmitted ] = useState(false);

    const formik = useFormik({
        initialValues,
        validationSchema,
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: (values) => {
            console.log("values", values);
            formik.resetForm();
            setIsSubmitted(true);
        },
    });

    const isSubmitDisabled = () => {
        return isSubmitted
            || !formik.values.name
            || !formik.values.surname
            || !formik.values.email
            || formik.values.phone?.length < 8
            || formik.values.phone?.length > 15
            || !formik.values.inquiry
            || !formik.isValid;
    };

    return {
        formik,
        isSubmitDisabled,
        isSubmitted,
    };

};
export default useConsumerForm;