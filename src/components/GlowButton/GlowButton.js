import React from "react";
import { styled } from "styled-components";

const Span = styled.span`
  margin-right: -0.8em;
  ${({ color }) => `text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3),
  0 0 0.45em ${color}`}
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
  animation: border-flicker 2s linear infinite;
  ${({ color }) => `color: ${color}`};
  ${({ color }) => `border: 0.15em solid ${color}`};
  ${({ color }) =>
    `box-shadow: inset 0px 0px 0.5em 0px ${color}, 0px 0px 0.5em 0px ${color}`};
  ${({ isDisabled }) => (isDisabled ? "cursor: not-allowed" : "")};
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    z-index: -1;
    ${({ color }) => `background-color: ${color}`};
    ${({ color }) => `box-shadow: 0 0 2em 0.2em ${color}`};
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

const GlowButton = ({
  handleClick,
  isDisabled = false,
  text,
  style,
  color,
}) => {
  return (
    <Button
      color={color}
      onClick={(e) => handleClick(e)}
      style={style}
      isDisabled={isDisabled}
    >
      <Span color={color}>{text}</Span>
    </Button>
  );
};

export default GlowButton;
