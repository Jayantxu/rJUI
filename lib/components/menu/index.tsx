import React from 'react';
import RJUILink from './RJUILink';
import RJUISticker from './RJUISticker';

const Menu: React.FC<unknown> = () => {
    return (
    <div className="rjui-header">
        <RJUILink />
        <RJUISticker />
        <style global jsx>{`
        `}</style>
    </div>
  );
};

export default Menu;
