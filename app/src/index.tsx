import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import {renderWidget} from 'lib';

const App = () => {
    const targetRef = useRef();

    useEffect(() => {
        renderWidget(targetRef.current);
    }, [targetRef]);

    return <div ref={targetRef}></div>;
};

const root = document.getElementById('root');
ReactDOM.render(<App/>, root);
