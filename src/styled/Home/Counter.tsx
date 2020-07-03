import styled from "styled-components";

const Number = styled.h2`
    color: #FFFFFF;
    font-size: 3vw;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 7vw;
`;

const Button = styled.button`
    width: 2vw;
    font-size: 1.5vw;
    border-radius: 0.5vw;
    border: none;
`;

export {
    Number,
    Row,
    Button
}