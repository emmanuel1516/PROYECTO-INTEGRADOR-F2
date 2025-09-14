// @/components/consumer-form/ConsumerForm.jsx
import { ButtonDanger, ButtonPrimary } from "@/components/buttons";
import { InputEmail, InputName, InputPhone, InputSurname } from "@/components/inputs";
import PropTypes from "prop-types";
import "./consumer-form.scss";
import useConsumerForm from "./useConsumerForm";

const ConsumerForm = ( props ) => {
    const { className, onCancel, onBuy, isCartEmpty = false, ...restProps } = props;
    const { formik, isSubmitDisabled } = useConsumerForm({ onBuy });
    const classes = `consumer-form ${className ?? ""}`;

    const handleCancel = () => {
        formik.resetForm();
        onCancel?.();
    };

    const disabledBuy = isSubmitDisabled() || isCartEmpty || formik.isSubmitting;

    return (
        <form className={classes} onSubmit={formik.handleSubmit} {...restProps}>
            <InputName formik={formik} />
            <InputSurname formik={formik} />
            <InputEmail formik={formik} />
            <InputPhone formik={formik} />

            <div className="consumer-form__actions">
                <ButtonDanger type="button" onClick={handleCancel}>
                    Cancelar
                </ButtonDanger>
                <ButtonPrimary type="submit" disabled={disabledBuy}>
                    {formik.isSubmitting ? "Procesando..." : "Comprar"}
                </ButtonPrimary>
            </div>
        </form>
    );
};

ConsumerForm.propTypes = {
    className: PropTypes.string,
    onCancel: PropTypes.func.isRequired,
    onBuy: PropTypes.func.isRequired,
    isCartEmpty: PropTypes.bool,
};

export default ConsumerForm;