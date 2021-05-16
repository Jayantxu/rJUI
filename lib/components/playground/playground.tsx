import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Boxmd from './boxMd';
import Boxcode from './boxCode';
import { LiveProvider } from 'react-live';

// # https://www.nextjs.cn/docs/advanced-features/dynamic-import
const DynamicCom = dynamic(() => import('./ground'), {
    ssr: false,
    loading: () => (
        <div>加载中...</div>
    )
});

interface PlaygroundProps {
    boxTitle: string
    boxDesc: string
    code: string
    relyCom: any
}

// # mdx block, use next dynamic-import load compoents
const Playground: React.FC<PlaygroundProps> = React.memo(
    ({ boxTitle, boxDesc, code, relyCom }) => {

        const [ padStatus ] = useState(0.815);
        return(
            <>
                <div className="rjui-playground">
                    {/* #https://www.mdxjs.cn/guides/live-code */}
                    <LiveProvider code={code} scope={relyCom} >
                        <DynamicCom boxTitle={boxTitle} Relycom={relyCom} padStatus={padStatus} />
                        <section className="rjui-pg-text-part">
                            <span className="rjui-pg-box-title">{boxTitle}</span>
                            <Boxmd code={boxDesc}/>
                        </section>
                        <div className="rjui-pg-code-part">
                            <Boxcode code={code} padStatus={padStatus}/>
                        </div>
                    </LiveProvider>
                </div>
                <style jsx>{`
                    .rjui-playground {
                        width: 98%;
                        margin: 2rem auto;
                        border-radius: 4px;
                        border: 1px solid #e9e9e9;
                        display: flex;
                        flex-direction: column;
                        position: relative;
                    }
                    .rjui-pg-box-title {
                        color: rgba(0, 0, 0, 0.85);
                        font-size: 0.875rem;
                        background: #fff;
                        padding: 1px 0.5rem;
                        margin-left: 1rem;
                        position: absolute;
                        top: -12px;
                    }
                    .rjui-pg-text-part {
                        position: relative;
                        padding: ${padStatus}rem
                    }
                    .rjui-pg-code-part {
                        border-top: 1px dashed #e9e9e9;
                        dislplay: flex;
                        flex-direction: column;
                    }
                `}</style>
            </>
        );
    }
);
export default Playground;