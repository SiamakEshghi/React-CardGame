import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from 'components/App';
import { makeDeck } from 'utils';

let wrapper;

beforeEach(() => {
    wrapper = mount(<App />);
    // console.log(wrapper.debug());
});

afterEach(() => {
    wrapper.unmount();
})
describe('App UI', () => {
    it('Should render correctly', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    })
    it('When we run App it should show only one card', () => {
        expect(wrapper.find('.back').length).toEqual(1);
    })
    it('Should show a Cylon loading if state.loading is true', () => {
        wrapper.setState({ loading: true });
        wrapper.update();
        expect(wrapper.find('Loading').length).toEqual(1);
    });
    it('Should show no more card when counter is equal to 52', () => {
        wrapper.setState({ counter: 52 });
        wrapper.update();
        expect(wrapper.render().text()).toContain('No More Card!');
    });
});

describe('Deal Action', () => {
    it('Should show a new dealed card after each click', () => {
        wrapper.find('.dealBtn').simulate('click');
        wrapper.find('.dealBtn').simulate('click');
        wrapper.update();
        expect(wrapper.find('.dealedDeck').length).toEqual(2);
    });
    it('Should show add a new card to dealedDeck after each click', () => {
        wrapper.find('.dealBtn').simulate('click');
        wrapper.find('.dealBtn').simulate('click');
        wrapper.update();
        expect(wrapper.state('dealedDeck').length).toEqual(2);
    })
});

describe('Shuffle Action', () => {
    beforeEach(() => {
        wrapper.find('.dealBtn').simulate('click');
        wrapper.find('.dealBtn').simulate('click');
        wrapper.find('button').simulate('click');
        wrapper.update();
    })
    it('Deck order should be different after shuffle', () =>{
        const firstdeck = makeDeck();
        const secondDeck = wrapper.state('deck');
        expect(firstdeck[0]).not.toEqual(secondDeck[0]);
    });

    it('should remode all dealed card after shuffle', () => {
        expect(wrapper.state('dealedDeck').length).toEqual(0);
    })
});