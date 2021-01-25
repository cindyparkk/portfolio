import React from 'react';
import styled, {keyframes} from 'styled-components';

const Container = styled.div``;

const Text = styled.title``;

const Icon = styled.link``;

const Title = ({title}) => {

    return <Container>
        <Text>{title}</Text>
        <Icon rel="shortcut icon" type="image/x-icon" href="/logo.svg"/>
    </Container>
}

Title.defaultProps = {
    title: "Cindy Park | Portfolio"
};

export default Title;