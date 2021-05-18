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
        // expect(iconWrap.childAt(1)).toBe(true);
        expect(() => iconWrap.unmount()).not.toThrow();
    });
    
    //   it('should stacked when avatars are in a group', () => {
    //     const group = render(
    //       <Avatar.Group>
    //         <Avatar />
    //         <Avatar />
    //       </Avatar.Group>,
    //     )
    //     expect(group).toMatchSnapshot()
    //   })
    
    //   it('should show count in group', () => {
    //     const count = 20
    //     const group = shallow(<Avatar.Group count={count} />)
    //     const text = group.find('.count').text()
    //     expect(text).toContain(count)
    //   })
});