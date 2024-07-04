import React, { useState, useEffect } from "react";
import CustomAlert from "../component/CustomComponent/CustomAlert";
import CustomButton from "../component/CustomComponent/CustomButtons";
import CustomTextField from "../component/CustomComponent/CustomTextField";
import "./publicComponentPage.css";

const PublicComponentPage = () => {
  const [textFieldValue, setTextFieldValue] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  return (
    <div className='public-component-page'>
      <h1>Public Components Showcase</h1>

      <section className='component-section'>
        <h2>Custom Alert</h2>
        <p>
          The CustomAlert component is used to display temporary alert messages.
          It accepts two props: message and duration (in milliseconds).
        </p>
        <button onClick={() => setShowAlert(true)}>Show Alert</button>
        {showAlert && (
          <CustomAlert message='This is a custom alert!' duration={3000} />
        )}
      </section>

      <section className='component-section'>
        <h2>Custom Button</h2>
        <p>
          The CustomButton component is used to create customizable buttons. You
          can set the text, size (small, medium, large), color, and onClick
          handler.
        </p>
        <CustomButton
          text='Small Button'
          size='small'
          color='green'
          onClick={() => alert("Small button clicked!")}
        />
        <CustomButton
          text='Medium Button'
          size='medium'
          color='blue'
          onClick={() => alert("Medium button clicked!")}
        />
        <CustomButton
          text='Large Button'
          size='large'
          color='red'
          onClick={() => alert("Large button clicked!")}
        />
      </section>

      <section className='component-section'>
        <h2>Custom Text Field</h2>
        <p>
          The CustomTextField component is used for input fields. You can set
          the value, onChange handler, size (small, medium, large),
          backgroundColor, fontColor, fontSize, and placeholder.
        </p>
        <CustomTextField
          value={textFieldValue}
          onChange={(e) => setTextFieldValue(e.target.value)}
          size='medium'
          backgroundColor='lightgray'
          fontColor='black'
          fontSize='16px'
          placeholder='Enter text here'
        />
      </section>
    </div>
  );
};

export default PublicComponentPage;
