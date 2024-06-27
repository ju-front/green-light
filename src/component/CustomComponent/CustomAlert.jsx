import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./CustomAlert.css";

const CustomAlert = ({ message, duration, fontColor }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  return (
    <div className='custom-alert' style={{ color: fontColor }}>
      {message}
    </div>
  );
};

CustomAlert.propTypes = {
  message: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  fontColor: PropTypes.string.isRequired,
};

CustomAlert.defaultProps = {
  message: "Default message",
  duration: 2000,
  fontColor: "white",
};

export default CustomAlert;
