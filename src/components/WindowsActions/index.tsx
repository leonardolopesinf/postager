import React, { useState, useEffect } from "react";
import { FiMinus, FiSquare, FiX } from 'react-icons/fi';
import { RiFileCopyLine } from 'react-icons/ri';
import { Container, Action } from "./styles";
import { remote, ipcRenderer as ipc } from "electron";
import channels from "../../../keys/channels";

const WindowsActions: React.FC = () => {

    const [maximized, setMaximized] = useState<boolean>(false);
    
    const { MAXIMIZED } = channels;

    useEffect(() => {
        ipc.send(MAXIMIZED.GET);
        
        ipc.once(MAXIMIZED.GET_DONE, (event, args) => setMaximized(args));

        ipc.on(MAXIMIZED.SET_DONE, (event, args) => setMaximized(args));
    },[])

    const minimizeHandler = () => {
        const window = remote.getCurrentWindow();

        window.minimize();
    }

    const maximizeHandler = () => {
        const window = remote.getCurrentWindow();

        setMaximized(true);

        ipc.send(MAXIMIZED.SET, true);

        window.maximize();
    }

    const unmaximizeHandler = () => {
        const window = remote.getCurrentWindow();

        setMaximized(false);

        ipc.send(MAXIMIZED.SET, false);

        window.unmaximize();
    }

    const closeHandler = () => {
        const window = remote.getCurrentWindow();

        window.close();
    }

    return (
        <Container>
            <Action onClick={minimizeHandler} data-testid="minimize">
                <FiMinus />
            </Action>
            <Action onClick={maximized ? unmaximizeHandler : maximizeHandler} data-testid="max-unmaximize">
                {maximized ? <RiFileCopyLine data-testid="unmaximize" /> : <FiSquare data-testid="maximize"/>}
            </Action>
            <Action className="close" onClick={closeHandler} data-testid="close">
                <FiX />
            </Action>
        </Container>
    )

}

export default WindowsActions;
