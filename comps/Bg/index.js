import React from 'react';
import styled, {keyframes} from 'styled-components';

const Container = styled.div`
    // display: flex;
    background-color: ${props=>props.bgcolor ? props.bgcolor : "#fff"};
`;


const Bg = ({bgcolor}) => {
    return <Container bgcolor={bgcolor}>
    </Container>
}

Bg.defaultProps = {
    bgcolor: null,
};

export default Bg;