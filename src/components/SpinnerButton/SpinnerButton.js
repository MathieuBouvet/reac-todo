import React from "react";
import Button from "../Button";
import Spinner from "./Spinner";

const SpinnerButton = ({ spin, children, ...rest }) => (
  <Button {...rest}>
    {
      <>
        {spin && <Spinner />}
        {children}
      </>
    }
  </Button>
);

export default SpinnerButton;
