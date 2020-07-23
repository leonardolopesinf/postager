import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import WindowsActions from '.';
import { remote } from 'electron';

describe('Windows Actions', () => {
    beforeEach(() => render(<WindowsActions />));

    test('Minimize', () => {
        const window = remote.getCurrentWindow();

        const Minimize = screen.getByTestId('minimize');

        fireEvent.click(Minimize);

        const isMinimized = window.isMinimized();

        expect(isMinimized).toBeTruthy();
    })

    test('Maximize and Unmaximize Switch', () =>{
        const MaxAndUnmaximize = screen.getByTestId('max-unmaximize');
        
        let Icon = MaxAndUnmaximize.children.item(0);

        let id = Icon.getAttribute('data-testid');

        expect(id).toBe('maximize');

        fireEvent.click(MaxAndUnmaximize)

        Icon = MaxAndUnmaximize.children.item(0);

        id = Icon.getAttribute('data-testid');

        expect(id).toBe('unmaximize');
    })
    
    test('Maximize', () => {
        const window = remote.getCurrentWindow();
        
        const MaxAndUnmaximize = screen.getByTestId('max-unmaximize');

        let Icon = MaxAndUnmaximize.children.item(0);

        let id = Icon.getAttribute('data-testid');

        expect(id).toBe('maximize');

        if(id === 'maximize'){
            fireEvent.click(MaxAndUnmaximize);
            
            const isMaximized = window.isMaximized();

            expect(isMaximized).toBeTruthy();
        }

    })

    test('Unmaximize', () =>{
        const window = remote.getCurrentWindow();
        
        const MaxAndUnmaximize = screen.getByTestId('max-unmaximize');

        fireEvent.click(MaxAndUnmaximize)

        const Icon = MaxAndUnmaximize.children.item(0);
    
        const id = Icon.getAttribute('data-testid');

        expect(id).toBe('unmaximize');

        if(id === 'unmaximize'){
            fireEvent.click(MaxAndUnmaximize);
            
            const isMaximized = window.isMaximized();

            expect(isMaximized).toBeFalsy();
        }
    })
})