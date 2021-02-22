import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    min-height: 130px;
    // background-color: #272834;
    // position: absolute;
    // bottom: 0;
    display: flex;
    align-items: center;
    // padding-right: 40px;
    margin-top: 30px;
`;

const FooterEmail = styled.div`
    padding: 0px 30px;
    flex: 4;
    // padding-top: 20px;
    display: flex;
    justify-content: space-between;
`;

const Email = styled.h3`
    color: #272834;
    // flex: 4;
`;

const Links = styled.div`
    display: flex;
    align-items: center;

    & > img {
        width: 25px;
        height: auto;
        padding-left: 5px;
        cursor: pointer;
    }
`;

const Resume = styled.h3`
    cursor: pointer;
`;

const Footer = ({}) => {
    return <Container>
        <FooterEmail>
            <Email>contact@cindypark.ca</Email>
            <Links>
                <Resume>Resume |</Resume>
                <img src="/linkedin.svg"></img>
            </Links>
        </FooterEmail>
    </Container>
}

Footer.defaultProps = {

};

export default Footer;