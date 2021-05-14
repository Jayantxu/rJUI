import React, { useState, useEffect, useRef} from 'react';
import RJUITabs from './RJUITabs';
import { useConfigs } from '../../data/context';
import { mobileSize } from '../../data/mediaJson';

const MenuSticker = () => {
    const [fixed, setFixed] = useState(false);
    const fixRef = useRef(false);
    const { isMobileType, updateHeaderTabFixed, updateIsMobileType } = useConfigs();
    let scrollTimer!: number;
    useEffect(() => {
        const screenScrollHandler = () => {
            if(scrollTimer) {
                clearTimeout(scrollTimer);
            }
            scrollTimer = window.setTimeout(() => {
                const shouldFixed = (document.documentElement.scrollTop >= 60);
                if(fixRef.current === shouldFixed) return;
                setFixed(shouldFixed);
                fixRef.current = shouldFixed;
            }, 20);
        };
        document.addEventListener('scroll', screenScrollHandler);
        return () => {
            document.removeEventListener('scroll', screenScrollHandler);
        };
    }, []);
    useEffect(() => {
        updateHeaderTabFixed(fixed); // 改变映射入的值
    }, [fixed]);

    let resizeTimer: number;
    useEffect(() => {
        const winResize = () => {
            if(resizeTimer) {
                clearTimeout(resizeTimer);
            }
            resizeTimer = window.setTimeout(() => {
                const offsetWidth = document.body.offsetWidth;
                const bool = offsetWidth > mobileSize.mediaBreakNum;
                updateIsMobileType(bool);
            }, 150);
        };
        window.addEventListener('resize', winResize);
        winResize();
        return () => {
            document.removeEventListener('resize', winResize);
        };
    });

    return (
        <>
            <nav className={`${fixed ? 'fixed' : 'active'} rjui-nav-tabs`}>
                {isMobileType && <RJUITabs />}
            </nav>
            <style jsx>{`
                nav {
                    height: 48px;
                    width: 100%;
                    background-color: #fff;
                }
                nav.fixed {
                    position: fixed;
                    top: -1px;
                    left: 0;
                    right: 0;
                    z-index: 999;
                    box-shadow: rgba(0, 0, 0, 0.25) 0 0 15px 0;
                }
                nav.active {
                    border-bottom: 1px solid #e9e9e9;
                }
                @media only screen and (max-width: ${mobileSize.mediaBreak}) {
                    nav {
                        height: 0;
                    }
                }
            `}</style>
        </>
    );
};

export default MenuSticker;
