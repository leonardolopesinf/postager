import styled from "styled-components";
import themes from "../../styles/themes";

const Container = styled.div`
    width: 100%;
    height: 35px;
    position: relative;

    -webkit-user-select: none;
    -webkit-app-region: drag;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    background-color: ${themes.colors.primary};
    box-shadow: 0 5px 10px 0 ${themes.colors.shadow};
`;

const Title = styled.p`
    font-size: 15px;
    font-weight: 500;
    color: ${themes.colors.white}
`;

export {
    Container,
    Title
}