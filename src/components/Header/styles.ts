import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 40px;
    position: relative;

    -webkit-user-select: none;
    -webkit-app-region: drag;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    background-color: ${props => props.theme.colors.primary};
    box-shadow: 0 5px 10px 0 ${props => props.theme.colors.shadow};
`;

const Title = styled.p`
    font-size: 15px;
    font-weight: 500;
    color: ${props => props.theme.colors.white}
`;

export {
    Container,
    Title
}