import React from 'react';
import { mobileSize } from '../../data/mediaJson';
import { useConfigs } from 'lib/data/context';
import { Icon } from '../../../components';

const Menu: React.FC<unknown> = () => {
    const { isMobileType } = useConfigs();
    const redirectGithub = () => {
        window.open(process.env.NEXT_PUBLIC_GITHUB_USER);
    };
    return (
    <div className="rjui-link-header">
        <p className="rjui-font-math front-title">RJUI</p>
        {isMobileType ? 
            <div className="rjui-controls rjui-hover" onClick={redirectGithub}>GitHub仓库</div> 
            : <Icon name="github" style={{ 'marginLeft': '30px' }} onClick={redirectGithub}></Icon>
        }
        <style global jsx>{`
            .rjui-link-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 70rem;
                height 60px;
                margin: 0 auto;
                position: relative;
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
            .rjui-header-icon {
                margin-left: 20px;
            }
            @media only screen and (max-width: 1150px) {
                .rjui-link-header {
                    width: 100%;
                    justify-content: space-around;
                }
            }
            @media only screen and (max-width: ${mobileSize.mediaBreak}) {
                .rjui-link-header {
                    width: 100%;
                    justify-content: center;
                    box-shadow: rgba(0, 0, 0, 0.25) 0 0 15px 0;
                }
                .rjui-controls {
                    position: absolute;
                    right: 0.7rem;
                }
            }

        `}</style>
    </div>
  );
};

export default Menu;
