import React, { useEffect, useState, useCallback, useMemo, useContext } from "react";
import { remote, app } from 'electron';
import { FiMinus, FiSquare, FiX } from "react-icons/fi";
import { RiFileCopyLine } from 'react-icons/ri'
import { Container, Action } from "./styles";

const WindowsActions: React.FC = () => {

    const [isMaximized, setIsMaximized] = useState<boolean>(false)

    useEffect(() => {
        const checkIfIsMaximized = () => {
            const { screen } = remote;

            const window = remote.getCurrentWindow();
            const { x: windowX, y: windowY, width: currentWidth, height: currentHeight } = window.getBounds();

            const display = screen.getDisplayNearestPoint({ x: windowX, y: windowY });
            const { width: maxWidth, height: maxHeight } = display.workAreaSize;

            return (currentWidth === maxWidth && currentHeight === maxHeight);
        };

        setIsMaximized(checkIfIsMaximized())

    }, [])


    const minimize = useCallback(() => {
        const window = remote.getCurrentWindow();

        window.minimize();
    }, []);

    const maximize = useCallback(() => {
        const window = remote.getCurrentWindow();

        window.maximize();

        setIsMaximized(true);
    }, []);

    const unmaximize = useCallback(() => {
        const window = remote.getCurrentWindow();

        window.unmaximize();

        setIsMaximized(false);
    }, []);

    const close = useCallback(() => {
        const window = remote.getCurrentWindow();

        window.close();
    }, [])

    return (
        <Container>
            <Action onClick={minimize}>
                <FiMinus />
            </Action>
            <Action onClick={!isMaximized ? maximize : unmaximize}>
                {!isMaximized ? <FiSquare /> : <RiFileCopyLine />}
            </Action>
            <Action>
                <FiX onClick={close} />
            </Action>

        </Container>
    )

}

export default WindowsActions;
