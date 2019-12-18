import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Card";
import List from "./List";



it('card renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('list renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List />, div);
});
