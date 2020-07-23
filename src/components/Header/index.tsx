import React from "react";
import { Container, Title } from "./styles";
import WindowsActions from "../WindowsActions";

const Header: React.FC = () => {

    return (
        <Container>
            <Title>
                Postager
            </Title>
            <WindowsActions />
        </Container>
    )

}

export default Header;
