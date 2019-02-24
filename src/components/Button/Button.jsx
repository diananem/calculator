import React from "react";
import * as PT from "prop-types";
import { ButtonWrapper } from "./Button.styles";

const Button = ({ onClick, id, children, ...rest }) => (
  <ButtonWrapper name={id} onClick={onClick} {...rest}>
    {children}
  </ButtonWrapper>
);

Button.propTypes = {
  onClick: PT.func,
  id: PT.string.isRequired,
  children: PT.node
};

Button.defaultProps = {
  onClick: () => {},
  children: null
};

export default Button;
