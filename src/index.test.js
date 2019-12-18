import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Card";
import List from "./List";
import renderer from 'react-test-renderer';



it('card renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card title={'Test Title'} content={'Test Content'}/>, div);
    ReactDOM.unmountComponentAtNode(div);
});




it('list renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List cards={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
});


it('renders the UI as expected', () => {
    const tree = renderer 
        .create(<Card title={'Test Title'} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
})

it('renders the UI as expected', () => {
    const tree = renderer 
        .create(<List cards={[]} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
})