import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react"
import Counter from "./Counter";

describe('Counter', () => {
    
    beforeEach(() =>{
        render(<Counter />);
    })

    test("should start as 0", () => {
        const Number = screen.getByTestId('number');
        
        expect(Number).toHaveTextContent('0');
    })

    test("should increment +1 to Number", () => {
        const Number = screen.getByTestId('number');
        
        const PlusButton = screen.getByTestId('plus');

        fireEvent.click(PlusButton);

        expect(Number).toHaveTextContent('1');

    })

    test("should decrease -1 to Number", () => {
        const Number = screen.getByTestId('number');

        const MinusButton = screen.getByTestId('minus');

        fireEvent.click(MinusButton);

        expect(Number).toHaveTextContent('-1')
    })
})