import PropTypes from "prop-types";
import classnames from "classnames";


const Button = ({label, title, disabled=false, onClick})=>(
    <button 
    className={classnames("button", "is-info", "is-rounded", "is-fullwidth", "is-medium")}
    type={"button"}
    title={title || label}
    disabled={disabled}
    onClick={onClick}
    >
        {label}
        
    </button>
);

Button.propTypes={
label: PropTypes.string.isRequired, 
title: PropTypes.string, 
disabled: PropTypes.bool, 
onClick :PropTypes.func.isRequired,
}
export default Button;

