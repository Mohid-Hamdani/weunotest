import React, { useState } from "react";
import styles from "./SubmitButton.module.css";
import TextComponent from "../textComponent/TextComponent";

//   inputIcon:InputIcon,
const SubmitButton = (props) => {
  

  return (
    <button
      disabled={props?.disabled}
      className={`${ styles.btn
      } ${props?.className}`}
      onClick={props?.onClick}
    >
      {props.leftIcon}
      <TextComponent textClass={props?.textClass}>{props?.title}</TextComponent>
      {props.rightIcon}
    </button>
  );
};

export default SubmitButton;