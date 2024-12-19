import styled from "styled-components";
import { TextField } from "@mui/material";



const GlobalInput = () => {
    return (
      <>
        <StyledTextField />
      </>
    );
};

export default GlobalInput;

const StyledTextField = styled(TextField)`
  && {
    & .MuiOutlinedInput-root {

    }
  }
`;