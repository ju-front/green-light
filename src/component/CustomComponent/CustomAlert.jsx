import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./CustomAlert.css";

const CustomAlert = ({ message, duration }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  return <div className='custom-alert'>{message}</div>;
};

CustomAlert.propTypes = {
  message: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
};

export default CustomAlert;
