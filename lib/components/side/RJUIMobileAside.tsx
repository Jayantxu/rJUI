import React, { useState } from 'react';
import { menuHeadDatas, MenuArrInfo } from '../../data/menuJson';
import Router, { useRouter } from 'next/router';
import { useConfigs } from '../../data/context';

const mobileAside: React.FC = () => {
    const { pathname }  = useRouter();
    const [menuInfo] = useState<Array<MenuArrInfo>>(menuHeadDatas);
    const { mobileMenuExpand, updateMobileMenuExpand } = useConfigs();

    const judgeActiveMenu = (menuUrl: string): boolean => {
        if(pathname === menuUrl) {
            return true;
        }
        return false;
    };
    const menuUnitClickHandler = (tabItem: MenuArrInfo) => {
        if(tabItem.url && tabItem.url !== pathname) {
            const nextPath = `${tabItem.url}`;
            Router.push(nextPath);
        }
    };
    const hideMenuAside = () => {
        updateMobileMenuExpand(!mobileMenuExpand);
    };

    return (
        <div className="rjui-mobile-aside">
            <div className="rjui-mobile-aside-tabs">
                <>
                    {menuInfo.map(menuUnit => (
                        <div className="rjui-mobile-aside-tabs-unit" key={menuUnit.menuName}>
                            <p className="rjui-mobile-aside-tabs-title">{menuUnit.menuName}</p>
                            <div className="rjui-mobile-aside-menu">
                                {menuUnit.children.map(menuUnitType => (
                                    <div key={menuUnitType.menuName}>
                                        <p className="rjui-mobile-menu-title">{menuUnitType.menuName}</p>
                                        <div className="rjui-mobile-aside-menu-content">
                                            {menuUnitType.children.map(menuItem => (
                                                <p className={`${judgeActiveMenu(menuItem.url) ? 'is-active-menu': '' } rjui-mobile-menu-unit `} key={menuItem.menuName}
                                                    onClick={() => menuUnitClickHandler(menuItem)}
                                                >
                                                    {menuItem.menuName}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    <div className="rjui-mobile-aside-cort" onClick={() => hideMenuAside()}>
                        <span className="rjui-mobile-aside-cort-icon"></span>
                    </div>
                </>
            </div>
            <style jsx>{`
                .rjui-mobile-aside {
                    width: 100vw;
                    height: 100vh;
                    position: fixed;
                    top: 0;
                    left: 0;
                    background: ${mobileMenuExpand ? '' : '#b3b3b363'};
                    overflow: hidden;
                }
                .rjui-mobile-aside-tabs {
                    width: ${mobileMenuExpand ? '0' : '61vw'};
                    height: 100%;
                    background: #fff;
                    overflow: auto;
                    padding-top: 1rem;
                    transition: width 0.5s;
                }
                .rjui-mobile-aside-cort {
                    position: absolute;
                    width: 2.5rem;
                    height: 2.51rem;
                    background: #fff;
                    top: 6rem;
                    left: ${mobileMenuExpand ? '-1.5VW' : '60.5vw'};
                    transition: left 0.5s;
                    border-radius: 0.25rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    box-shadow: ${mobileMenuExpand ? '2px 0 8px rgb(0 0 0 / 15%)' : ''} 
                }
                .rjui-mobile-aside-cort-icon {
                    width: 1rem;
                    height: 1rem;
                    background: url(${mobileMenuExpand ? '/images/menu_Icon.png' : '/images/close_Menu.png'}) no-repeat;
                    background-size: 100% 100%;
                }
                .rjui-mobile-aside-tabs-unit {
                    display: flex;
                    flex-direction: column;
                }
                .rjui-mobile-aside-tabs-title {
                    height: 2.5rem;
                    line-height: 2.5rem;
                    margin: 0.25rem 0;
                    padding-left: 2.125rem;
                }
                .rjui-mobile-aside-menu {
                    display: flex;
                    flex-direction: column;
                }
                .rjui-mobile-menu-title {
                    margin: 0;
                    height: 1.75rem;
                    line-height: 1.75rem;
                    color: #00000073;
                    padding-left: 2.5rem;
                }
                .rjui-mobile-menu-unit {
                    height: 2.25rem;
                    line-height: 2.25rem;
                    margin: 0.6rem 0;
                    padding-left: 3rem;
                }
                .is-active-menu {
                    background: #e6f7ff;
                    position: relative;
                    color: #1890ff;
                }
                .is-active-menu:before {
                    content: '';
                    position: absolute;
                    width: 0.1875rem;
                    height: 100%;
                    background: #1890ff;
                    left: 0;
                }
            `}</style>
        </div>
    );
};
export { mobileAside as MobileMenuAside };