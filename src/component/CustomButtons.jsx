import React from "react";
import PropTypes from "prop-types";
import "./CustomButtons.css";

const CustomButton = ({ text, size = "medium", color, onClick }) => {
  const sizeStyles = {
    small: {
      fontSize: "12px",
      width: "80px",
      height: "30px",
    },
    medium: {
      fontSize: "16px",
      width: "100px",
      height: "40px",
    },
    large: {
      fontSize: "20px",
      width: "120px",
      height: "50px",
    },
  };

  return (
    <button
      className='custom-button'
      style={{
        backgroundColor: color,
        ...sizeStyles[size],
      }}
      onClick={onClick}>
      {text}
    </button>
  );
};

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.string,

  onClick: PropTypes.func,
};

CustomButton.defaultProps = {
  size: "medium",
  color: "blue",

  onClick: () => {},
};

export default CustomButton;
