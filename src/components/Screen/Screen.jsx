import React from "react";
import PT from "prop-types";
import { ScreenWrapper } from "./Screen.styles";

const Screen = ({ currentNumber, isAnimated }) => (
  <ScreenWrapper isAnimated={isAnimated}>{currentNumber}</ScreenWrapper>
);

Screen.propTypes = {
  currentNumber: PT.oneOfType([PT.string, PT.number]),
  isAnimated: PT.bool
};

Screen.defaultProps = {
  currentNumber: "0",
  isAnimated: false
};

export default Screen;
