import { forwardRef, useEffect, useRef } from 'react';
import PropTypes from "prop-types";

forwardRef.propTypes = {
    type: PropTypes.oneOf(["text", "email", "password", "number", "file"]),
    className: PropTypes.string,
    isFocused: PropTypes.bool,
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    variant: PropTypes.oneOf(["primary", "error", "primary-outline"]),
    placeholder: PropTypes.string,
    isError: PropTypes.bool,
};

export default forwardRef(function TextInput({ type = 'text', className = '', isFocused = false, defaultValue, variant = 'primary', placeholder, isError, ...props }, ref) {

    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={`rounded-2xl bg-form-bg py-[13px] px-7 w-full ${isError && 'input-error'} input-${variant} ${className}`}
            ref={input}
            placeholder={placeholder}
            defaultValue={defaultValue}
        />
    );
});
