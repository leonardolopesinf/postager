import React, { useState } from 'react';
import { Number, Button, Row } from '../../../styled/Home/Counter'

const Counter: React.FC = () => {

    const [number, setNumber] = useState<number>(0);

    const numberIncrement = () => setNumber(value => value + 1)

    const numberDecrement = () => setNumber(value => value - 1)

    return (
        <React.Fragment>
            <Number data-testid="number">{number}</Number>
            <Row>
                <Button data-testid="plus" onClick={numberIncrement}>+</Button>
                <Button data-testid="minus" onClick={numberDecrement}>-</Button>
            </Row>
        </React.Fragment>
    )
}

export default Counter;