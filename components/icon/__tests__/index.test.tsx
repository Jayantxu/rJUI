import React from 'react';
import { mount, render, shallow } from 'enzyme';
import { Icon } from 'components';

describe('Icon', () => {
    it('正确渲染Icon', () => {
        const icon = shallow(<Icon name="rJUI"/>);
        expect(() => icon.unmount()).not.toThrow();
    });
    
    it('Icon快照', () => {
        const icon = render(<Icon />);
        expect(icon).toMatchSnapshot();
    });
    
    it('正确渲染相关类名', () => {
        const icon = render(<Icon name="rJUI" className="myTest icon-red"/>);
        expect(icon.hasClass('myTest icon-red')).toBe(true);
        expect(icon.hasClass('otherClassName')).toBe(false);
    });

    it('正确挂载不同尺寸', () => {
        const iconWrap = mount(
            <div>
                <Icon name="rJUI" size="10" />
                <Icon name="rJUI" size="20" />
                <Icon name="rJUI" size="30" />
            </div>
        );
        expect(() => iconWrap.unmount()).not.toThrow();
    });
    it('正确渲染样式', () => {
        const iconWrap = mount(
            <div className="test-wrap">
                <Icon name="rJUI" color="red" />
                <Icon name="rJUI" rotate={90} />
                <Icon name="rJUI" spin />
            </div>
        );
        expect(iconWrap.find('.rjui-icon').at(2).hasClass('rjui-icon-spin')).toBe(true);
        expect(iconWrap).toMatchSnapshot();
    });
    it('正确渲染svg宽高', () => {
        const iconWrap = mount(<Icon width="40" height="40"/>);
        expect(iconWrap.props().width).toEqual('40');
        expect(iconWrap.props().height).toEqual('40');
    });
    
    it('正确触发事件', () => {
        const testState = { width: 10, height: 20 };
        const iconWrap = mount(
            <Icon width={testState.width} height={testState.height} 
                onClick={() => {
                    testState.width = 20;
                }}/>
        );
        expect(iconWrap.props().width).toEqual(10);
        iconWrap.find('.rjui-icon svg').simulate('click');
        expect(testState.width).toEqual(20);
    });
});