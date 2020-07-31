import React, { useState, useEffect, useCallback, useMemo } from "react";
import { FiMinus, FiSquare, FiX } from 'react-icons/fi';
import { RiFileCopyLine } from 'react-icons/ri';
import { Container, Action } from "./styles";
import { remote, ipcRenderer as ipc } from "electron";
import channels from "../../../common/keys/channels";

const WindowsActions: React.FC = () => {
    const [maximized, setMaximized] = useState<boolean>(false);

    const { MAXIMIZED } = useMemo(() => channels, []);

    useEffect(() => {
        const maximizedGet = (event: Electron.IpcRendererEvent, value: boolean) => setMaximized(value);

        const maximizedSet = (event: Electron.IpcRendererEvent, value: boolean) => setMaximized(value);

        ipc.once(MAXIMIZED.GET_DONE, maximizedGet);

        ipc.on(MAXIMIZED.SET_DONE, maximizedSet);

        ipc.send(MAXIMIZED.GET);

        return () => ipc.removeListener(MAXIMIZED.SET_DONE, maximizedSet);

    }, [])

    const minimizeHandler = useCallback(() => {
        const window = remote.getCurrentWindow();

        window.minimize();
    }, [])

    const maximizeHandler = useCallback(() => {
        const window = remote.getCurrentWindow();

        setMaximized(true);

        ipc.send(MAXIMIZED.SET, true);

        window.maximize();
    }, [])

    const unmaximizeHandler = useCallback(() => {
        const window = remote.getCurrentWindow();

        setMaximized(false);

        ipc.send(MAXIMIZED.SET, false);

        window.unmaximize();
    }, [])

    const closeHandler = useCallback(() => {
        const window = remote.getCurrentWindow();

        window.close();
    }, [])

    return (
        <Container>
            <Action onClick={minimizeHandler} data-testid="minimize">
                <FiMinus />
            </Action>
            <Action onClick={maximized ? unmaximizeHandler : maximizeHandler} data-testid="max-unmaximize">
                {maximized ? <RiFileCopyLine data-testid="unmaximize" /> : <FiSquare data-testid="maximize" />}
            </Action>
            <Action className="close" onClick={closeHandler} data-testid="close">
                <FiX />
            </Action>
        </Container>
    )

}

export default WindowsActions;
