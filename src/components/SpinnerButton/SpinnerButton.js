import React from "react";
import Button from "../Button";
import Spinner from "./Spinner";
import "./SpinnerButton.css";

const SpinnerButton = ({ spin, children, className, ...rest }) => {
  return (
    <Button
      className={`${className ? className : ""} ${
        spin ? "button-spinner" : ""
      }`}
      {...rest}
    >
      {
        <>
          {spin && <Spinner />}
          {children}
        </>
      }
    </Button>
  );
};

export default SpinnerButton;
