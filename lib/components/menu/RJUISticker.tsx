import React, { useState, useEffect} from 'react';
import RJUITabs from './RJUITabs';
import { useConfigs } from '../../data/context';
const MenuSticker = () => {
    const [fixed, setFixed] = useState(false);
    const { updateHeaderTabFixed } = useConfigs();
    useEffect(() => {
        const screenScrollHandler = () => {
            const shouldFixed = document.documentElement.scrollTop > 60;
            setFixed(shouldFixed);
        };
        document.addEventListener('scroll', screenScrollHandler);
        return () => {
            document.removeEventListener('scroll', screenScrollHandler);
        };
    }, []);
    
    useEffect(() => {
        updateHeaderTabFixed(fixed); // 改变映射入的值
    }, [fixed]);
    return (
        <>
            <nav className={fixed ? 'fixed' : 'active'}>
                <RJUITabs />
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
            `}</style>
        </>
    );
};

export default MenuSticker;
