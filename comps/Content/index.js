import React from 'react';
import styled, {keyframes} from 'styled-components';

const Container = styled.div`
    display: flex;
    // padding: 20px 50px;
    padding-top: ${props=>props.top ? props.top : "20px"};
    padding-bottom: ${props=>props.bottom ? props.bottom : "20px"};
    padding-left: ${props=>props.left ? props.left : "0px"};
    padding-right: ${props=>props.right ? props.right : "00px"};
    background-color: ${props=>props.bgcolor ? props.bgcolor : "#fff"};
`;

const Right = styled.div`
`;

const Title = styled.h5`
    text-transform: capitalize;
    margin: 20px 0px 20px 15px;
`;

const Text = styled.p`
    margin: 5px 50px 10px 15px;
`;

const List = styled.ul`
    display: ${props=>props.display ? props.display : "none"};
`;

const Content = ({title, text, bgcolor, display, item1, item2, item3, item4, item5, item6, left, right, top , bottom}) => {
    return <Container bgcolor={bgcolor} left={left} right={right} top={top} bottom={bottom}>
        <Right>
            <Title>{title}</Title>
            <Text>{text}</Text>
            <Text>
                <List display={display}>
                    {item1 ? <li>{item1}</li> : null}
                    {item2 ? <li>{item2}</li> : null}
                    {item3 ? <li>{item3}</li> : null}
                    {item4 ? <li>{item4}</li> : null}
                    {item5 ? <li>{item5}</li> : null}
                    {item6 ? <li>{item6}</li> : null}
                </List>
            </Text>
        </Right>
    </Container>
}

Content.defaultProps = {
    bgcolor: null,
    title:"understanding the problem",
    text:"text",
    display: null,
    item1: "",
    item2: "",
    item3: "",
    item4: "",
    item5: "",
    item6: "",
    left: null,
    right: null,
    top: null,
    bottom: null
};

export default Content;