import PropTypes from "prop-types";

PrimaryButton.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    variant: PropTypes.oneOf(["primary", "warning", "danger", "light-outline", "white-outline"]),
    processing: PropTypes.bool,
};

export default function PrimaryButton({ className = '', children, type = "submit", variant = "primary", processing, ...props }) {
    return (
        <button
            {...props}
            className={
                `rounded-2xl py-[13px] text-center w-full ${processing && 'opacity-30'} btn-${variant}` + className
            }
            disabled={processing}
        >
            {children}
        </button>
    );
}
