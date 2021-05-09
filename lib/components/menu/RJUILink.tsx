import React from 'react';

const Menu: React.FC<unknown> = () => {
    const redirectGithub = () => {
        window.open(process.env.NEXT_PUBLIC_GITHUB_USER);
    };
    return (
    <div className="rjui-link-header">
        <p className="rjui-font-math front-title">RJUI</p>
        <div className="rjui-controls rjui-hover" onClick={redirectGithub}>GitHub仓库</div>
        <style global jsx>{`
            .rjui-link-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                max-width: 1100px; 
                height 60px;
                margin: 0 auto;
            }
            .front-title {
                font-size: 1.8rem;
                margin: 0;
            }
            .rjui-controls {
                color: #6a6a6a;
                font-size: 0.9rem;
                border: 1px solid #d9d9d9;
                border-radius: 3px;
                padding: 0.1rem 0.3rem;
            }
        `}</style>
    </div>
  );
};

export default Menu;
