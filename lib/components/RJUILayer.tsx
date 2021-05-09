// # RJUIMainLayer
import { ReactNode } from 'react';
import RJUIHeader from './RJUIheader';
import { useConfigs } from 'lib/data/context';
import MenuAside from './side/index';

interface PAGETITLE {
    title: string
}
interface LayerMeta {
    children: ReactNode,
    pageTitle: PAGETITLE
}

export const RJUILayer: React.FC<LayerMeta> = ({ children, pageTitle }: LayerMeta) => {
    const { headerTabFixed } = useConfigs();
    return (
        <>
            <section className="rjui-layer">
                <RJUIHeader pageTitle={pageTitle} />
                <aside className="rjui-side">
                    <MenuAside />
                </aside>
                <div className="rjui-i-main-distance"></div>
                <div className="content">{ children }</div>
            </section>
            <style jsx>{`
                .rjui-layer {
                    min-height: calc(100vh - 60px - 48px);
                    max-width: 70rem;
                    margin: 0 auto;
                    padding: 0 1rem;
                    display: flex;
                    box-sizing: border-box;
                    position: relative;
                }
                .rjui-side {
                    width: 200px;
                    // height: calc(100% - ${headerTabFixed ? '6rem' : '8rem'});
                    height: calc(100% - 8rem);
                    margin-right: 20px;
                    flex-shrink: 0;
                    -webkit-overflow-scrolling: touch;
                    -webkit-flex-shrink: 0;
                    bottom: 2rem;
                    position: fixed;
                    top: calc(60px + 48px + ${headerTabFixed ? '-40px' : '10px'});
                    transition: top 0.25s;
                    z-index: 100;
                    overflow: auto;
                    
                }
                .rjui-side::-webkit-scrollbar {
                    width: 0;
                    background-color: transparent;
                }
                .rjui-i-main-distance {
                    width: 220px;
                    flex-shrink: 0;
                    height: 100vh;
                }
            `}</style>
        </>
    );
};

export default RJUILayer;