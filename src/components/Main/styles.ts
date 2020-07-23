import styled from "styled-components";
import themes from "../../styles/themes";

const Container = styled.div`
    background-color: ${themes.colors.secondary};
    flex: 1;
    border-right: 1px solid ${themes.colors.border};
`;

export {
    Container
}