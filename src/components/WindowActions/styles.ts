import styled from "styled-components";

const Container = styled.div`
    width: 120px;
    height: 40px;

    position: absolute;
    right: 0;

    display: flex;
    flex-direction: row;
    justify-content: space-around;

    -webkit-app-region: no-drag;
`;

const Action = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
   
    color: ${props => props.theme.colors.white};

    &:hover{
        background-color: ${props => props.theme.colors.lighter};
        cursor: pointer;
    }
`;

export {
    Container,
    Action
}