import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Card from 'components/Card';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<Card />);
});

describe('Card', () => {
    it('Should render correctly', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('If value is empty just show No More Card!', () => {
        wrapper.setProps({value : ""});
        wrapper.update();
        expect(wrapper.find('.back').length).toEqual(0);
        expect(wrapper.find('Loading').length).toEqual(0);
        expect(wrapper.render().text()).toContain('No More Card!');
    });

    it('If back is true just show back card', () => {
        wrapper.setProps({back: true});
        wrapper.update();
        expect(wrapper.find('.back').length).toEqual(1);
        expect(wrapper.find('Loading').length).toEqual(0);
        expect(wrapper.render().text()).not.toContain('No More Card!');
    });
    it('If loading is true just show loading', () => {
        wrapper.setProps({loading: true});
        wrapper.update();
        expect(wrapper.find('.back').length).toEqual(0);
        expect(wrapper.find('Loading').length).toEqual(1);
        expect(wrapper.render().text()).not.toContain('No More Card!');
    });
});