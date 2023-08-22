import React from "react";
import { styled } from "styled-components";
import theme from "../../styles/colors";

const disabledColor = theme.colors.disabled;

const Span = styled.span`
  margin-right: -0.8em;
  ${({ isdisabled, color }) => getSpanColorStyles(isdisabled, color)};
  transition: 0.4s;
`;

const Button = styled.button`
  position: relative;
  cursor: pointer;
  padding: 1.2em 2.4em;
  border-radius: 0.45em;
  background: none;
  perspective: 2em;
  font-size: 1em;
  font-weight: 900;
  letter-spacing: 0.8em;
  transition: 0.4s;
  ${({ isdisabled, color }) => getColorStyles(isdisabled, color)};

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    z-index: -1;
    transition: opacity 100ms linear;
  }
  &:hover {
    color: rgba(0, 0, 0, 0.8);
    text-shadow: none;
    animation: none;
  }
  &:hover::after {
    opacity: 1;
  }
`;

const getColorStyles = (isdisabled, color) => {
  if (isdisabled) {
    return `
    cursor: not-allowed;
    color: ${disabledColor};
    border: 0.15em solid ${disabledColor};
    box-shadow: inset 0px 0px 0.5em 0px ${disabledColor}, 0px 0px 0.5em 0px ${disabledColor};
    &::after {
      background-color: ${disabledColor};
      box-shadow: 0 0 2em 0.2em ${disabledColor};
    }
    `;
  }
  return `
    color: ${color};
    border: 0.15em solid ${color};
    box-shadow: inset 0px 0px 0.5em 0px ${color}, 0px 0px 0.5em 0px ${color};
    &::after {
      background-color: ${color};
      box-shadow: 0 0 2em 0.2em ${color};
    }
  `;
};

const getSpanColorStyles = (isdisabled, color) => {
  if (isdisabled) {
    return `text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3),
  0 0 0.45em ${disabledColor};`;
  }
  return `text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3),
  0 0 0.45em ${color};`;
};

const GlowButton = ({ handleClick, isdisabled, text, style, color }) => {
  return (
    <Button
      color={color}
      onClick={(e) => handleClick(e)}
      style={style}
      isdisabled={isdisabled}
    >
      <Span color={color} isdisabled={isdisabled}>
        {text}
      </Span>
    </Button>
  );
};

export default GlowButton;
