import styled from "styled-components";
import { TextField } from "@mui/material";

import { colors } from "../../theme";

const GlobalInput = (props) => {
  const { onChange, isDarkMode, error } = props;

  return (
    <>
      <StyledTextField
        {...props}
        sx={{
          input: {
            color: isDarkMode ? colors.beige : colors.black,
          },
        }}
        onChange={(e) => {
          const {
            target: { value, name },
          } = e;
          onChange(value, name);
        }}
      />
    </>
  );
};

export default GlobalInput;

const StyledTextField = styled(TextField)`
  && {
    & .MuiOutlinedInput-root {
      max-height: 35px;
      border-radius: 30px;
      font-family: "Inter-Light";
      font-size: 16px;
      padding-left: 5px;
      /* color: ${(props) =>
        props.isDarkMode ? colors.beige : colors.black}; */
      & fieldset {
        border-color: ${(props) =>
          props.isDarkMode
            ? colors.beige
            : props.error
              ? colors.red
              : colors.black};
      }

      &:hover fieldset {
        border-color: ${(props) =>
          props.isDarkMode
            ? colors.beige
            : props.error
              ? colors.red
              : colors.black};
        border-width: 1px;
      }

      &.Mui-focused fieldset {
        border-color: ${(props) =>
          props.isDarkMode
            ? colors.beige
            : props.error
              ? colors.red
              : colors.black};
        border-width: 1px;
        color: ${(props) => (props.isDarkMode ? colors.beige : colors.black)};
      }
    }
  }
`;
