import React, { useState } from "react";
import Proptypes from "prop-types";
import "./Button.css";

const Button = ({
  primaryColor,
  secondaryColor,
  children,
  className,
  ...rest
}) => {
  const [hovered, setHovered] = useState(false);
  const defaultStyle = {
    backgroundColor: "transparent",
    color: primaryColor,
    borderColor: primaryColor,
  };
  const hoverStyle = {
    borderColor: secondaryColor,
    color: secondaryColor,
    backgroundColor: primaryColor,
  };
  return (
    <button
      className={`button ${className}`}
      style={hovered ? hoverStyle : defaultStyle}
      {...rest}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
  primaryColor: "#00ffff",
  secondaryColor: "#000000",
  className: "",
};
Button.propTypes = {
  type: Proptypes.string,
  onClick: Proptypes.func,
  primaryColor: Proptypes.string.isRequired,
  secondaryColor: Proptypes.string.isRequired,
};
export default Button;
