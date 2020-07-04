import styled from "styled-components";

const Container = styled.div`
    background-color: ${props => props.theme.colors.primary};
    flex: 0.4;
    border-right: 1px solid ${props => props.theme.colors.border};
`;

export {
    Container
}