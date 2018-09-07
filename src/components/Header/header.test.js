import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Header from 'components/Header';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<Header />);
});

describe('Header', () => {
    it('Should render correctly', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});