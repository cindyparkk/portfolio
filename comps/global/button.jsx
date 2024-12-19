import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import styled from "styled-components";
import colors from "../../theme/colors";

const GlobalButton = (props) => {
  const { text, isDark, isError } = props;
  return (
    <>
      <RoundButton {...props}>
        {text}
      </RoundButton>
    </>
  );
};

export default GlobalButton;

const RoundButton = styled(Button)`
  && {
    font-family: "Inter-Light";
    text-transform: uppercase;
    color: ${(props) =>
      props.isDark || props.isError ? colors.beige : colors.black};
    font-size: 16px;
    padding: 8px 16px;
    border-radius: 30px;
    max-height: 35px;
    border: 1px solid ${(props) => (props.isDark ? colors.beige : props.isError ? colors.red : colors.black)};
    background-color: ${(props) =>
      props.isDark ? colors.black : props.isError ? colors.red : colors.beige};

    &:hover {
      background-color: ${(props) =>
        props.isDark ? colors.beige : props.isError ? colors.darkRed : colors.black};
      color: ${(props) => (props.isDark ? colors.black : colors.beige)};
      border: ${(props) => props.isDark && `1px solid ${colors.black}`};

      svg {
        path {
          fill: ${(props) => (props.isDark ? colors.black : colors.beige)};
        }
      }
    }
  }
`;
