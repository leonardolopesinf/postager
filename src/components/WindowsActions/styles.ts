import styled from "styled-components";
import themes from "../../styles/themes";

const Container = styled.div`
    width: 10%;
    height: 100%;

    position: absolute;
    right: 0;

    display: flex;

    -webkit-app-region: none;
    
    div:hover{
        background-color: ${themes.colors.primaryLigther};
    }

    .close:hover{
        background-color: ${themes.colors.red};
    }
`;

const Action = styled.div`
    height: 100%;

    flex: 1;

    display: flex;
    align-items: center;

    * {
        flex: 1;

        font-size: 15px;
    }
`;

export {
    Container,
    Action
}