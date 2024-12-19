import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import styled from "styled-components";
import colors from "../../theme/colors";

const GlobalButton = (props) => {
  const { text, isDark } = props;
  return (
    <>
      <RoundButton {...props} isDark={isDark}>
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
    color: ${(props) => (props.isDark ? colors.beige : colors.black)};
    font-size: 16px;
    padding: 8px 16px;
    border-radius: 30px;
    max-height: 35px;
    border: 1px solid ${(props) => (props.isDark ? colors.beige : colors.black)};
    background-color: ${(props) =>
      props.isDark ? colors.black : colors.beige};

    &:hover {
      background-color: ${(props) =>
        props.isDark ? colors.beige : colors.black};
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
