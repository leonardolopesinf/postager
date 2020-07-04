import styled from "styled-components";

const Container = styled.div`
    background-color: ${props => props.theme.colors.secondary};
    flex: 1;
    border-right: 1px solid ${props => props.theme.colors.border};
`;

export {
    Container
}