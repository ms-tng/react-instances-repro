import React, {useState} from 'react';
import Button from 'react-bootstrap/button';
import {createRoot} from 'react-dom/client';

export const renderWidget = (targetElement: HTMLElement) => {
    const root = createRoot(targetElement);
    root.render(<MyWidget/>);
};

const MyWidget = () => {
    const [count, setCount] = useState(0);

    return <Button onClick={() => setCount(c => c + 1)}>
        The count is {count}. Click to increment.
    </Button>;
};