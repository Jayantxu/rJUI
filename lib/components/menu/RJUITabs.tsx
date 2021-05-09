import React, { useEffect, useMemo, useState } from 'react';
import Router, { useRouter } from 'next/router';
import { menuHeadDatas, MenuArrInfo } from 'lib/data/menuJson';
const TabSticker = () => {
    const {pathname }  = useRouter(); // get now router pathName, #like /guide/introduction
    const [ nowMenuUrl, setNowMenuUrl ] = useState('/');
    const tabInfo = useMemo(() => menuHeadDatas, []);

    useEffect(() => {
        const nameArr = pathname.split('/').filter(iStr => !!iStr);
        const nowMenuTab = nameArr[0];
        setNowMenuUrl(`${nowMenuTab}`);
    }, [pathname]);


    const menuUnitClickHandler = (tabItem: MenuArrInfo) => {
        if(tabItem.url !== nowMenuUrl) {
            const nextPath = `${tabItem.url}`;
            Router.push(nextPath);
        }
    };
    return (
        <>
            <div className="rjui-tabs-sticker">
                <div className="rjui-tabs-inner">
                    <div className="rjui-tabs-container">
                        {tabInfo.map((tabItem) => (
                            <div className={`${nowMenuUrl === tabItem.name ? 'rjui-menu-active' : ''} rjui-tabs-unit rjui-hover`} key={tabItem.name} 
                                onClick={() => menuUnitClickHandler(tabItem)}>{tabItem.menuName}</div>
                        ))}
                    </div>
                </div>
            </div>
            <style jsx>{`
                .rjui-tabs-sticker {
                    width: 100%;
                    height: 100%;
                    position: relative;
                }
                .rjui-tabs-inner {
                    max-width: 1100px;
                    height: 100%;
                    padding: 0 1rem;
                    margin: 0 auto;
                }
                .rjui-tabs-container {
                    width: 100%;
                    height: 100%;
                    display: flex;
                }
                .rjui-tabs-unit {
                    height: calc(100% - 2px);
                    padding: 0 0 0 0.2rem;
                    color: #666;
                    font-size: 0.875rem;
                    margin-right: 0.99rem;
                    line-height: 45px;
                    position: relative;
                }
                .rjui-menu-active:after {
                    position: absolute;
                    content: "";
                    bottom: -1px;
                    left: 0px;
                    right: 0px;
                    width: 100%;
                    height: 2px;
                    transition: all 200ms ease 0s;
                    background-color: #000;
                    transform: scaleX(1);
                }

            `}</style>
        </>
    );
};
export default TabSticker;