import React from "react";
import PropTypes from "prop-types";
import "./CustomTextField.css";

const CustomTextField = ({
  value,
  onChange,
  size = "medium",
  backgroundColor = "white",
  fontColor = "black",
  fontSize = "16px",
  placeholder = "",
}) => {
  const sizeStyles = {
    small: {
      fontWeight: "bold",
      fontSize: "12px",
      padding: "8px",
    },
    medium: {
      fontWeight: "bold",
      fontSize: "16px",
      padding: "10px",
    },
    large: {
      fontWeight: "bold",
      fontSize: "20px",
      padding: "12px",
    },
  };

  return (
    <input
      className={`custom-textfield ${size}`}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{
        backgroundColor: backgroundColor,
        color: fontColor,
        border: "2px solid gray",
        ...sizeStyles[size],
      }}
    />
  );
};

CustomTextField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  backgroundColor: PropTypes.string,
  fontColor: PropTypes.string,
  fontSize: PropTypes.string,
  placeholder: PropTypes.string,
};

export default CustomTextField;