import React, { useMemo } from 'react';
import Router, { useRouter } from 'next/router';
import { menuHeadDatas, MenuArrInfo } from '../../data/menuJson';

const MenuAside: React.FC<unknown> = () => {
    const { pathname } = useRouter();

    const menuInfo = useMemo(() => {
        const tabName = pathname.split('/').filter(item => !!item)[0];
        let menuArr: MenuArrInfo[] = [];
        const notChildren: MenuArrInfo[] = [];
        menuArr = menuHeadDatas.filter(item => { 
            return item.name === tabName;
        });
        if(!menuArr.length) {
            return notChildren;
        }
        return menuArr[0].children;
    }, [pathname]);

    const menuUnitClick = (menu: MenuArrInfo) => {
        if(!menu.url) return;
        Router.push(menu.url);
    };
    const judgeActiveMenu = (menuUrl: string): boolean => {
        if(pathname === menuUrl) {
            return true;
        }
        return false;
    };
    return (
        <>
            <div className="rjui-aside-menu">
                {menuInfo.map((menuUnit, midx) => (
                    <div className="rjui-aside-menu-unit" key={menuUnit.name + midx}>
                        <span className="rjui-menu-unit-title">{menuUnit.name}</span>
                        <div className="rjui-menu-unit-content">
                            {menuUnit.children.map((menu, mjdx) => (
                                <div onClick={() => {menuUnitClick(menu);}} key={menu.menuName + mjdx} 
                                    className={`rjui-menu-unit rjui-hover ${judgeActiveMenu(menu.url) ? 'is-active-menu': '' } `}>
                                    {menu.menuName}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <style jsx>{`
                .rjui-aside-menu {
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                }
                .rjui-aside-menu-unit {
                    margin-bottom: 1rem;
                }
                .rjui-menu-unit-title {
                    font-size: 0.875rem;
                    transition: all 0.2s ease 0s;
                    color: #00000073;
                    letter-spacing: 1.3px;
                }
                .rjui-menu-unit-content {
                    margin-top: 0.4rem;
                }
                .rjui-menu-unit {
                    height: 2.2rem;
                    line-height: 2.2rem;
                    padding-left: 0.3rem;
                    font-size: 0.875rem;
                    color: #314659;
                }
                .rjui-menu-unit:hover {
                    color: #1890ff;
                }
                .is-active-menu {
                    color: #1890ff;
                }
            `}</style>
        </>
    );
};
export default MenuAside;