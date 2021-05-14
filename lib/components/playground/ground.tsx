import React from 'react';
import { LivePreview } from 'react-live';

interface GroundProps {
    boxTitle: string
    Relycom: Array<React.FC | any>
    padStatus: number
}


const Ground: React.FC<GroundProps> = ({ boxTitle, Relycom, padStatus }) => {
    return (
        <div className="rjui-pg-ground">
            <>
                <LivePreview />
            </>
            <style jsx>{`
                .rjui-pg-ground {
                    padding: ${padStatus}rem;
                    border-bottom: 1px solid #e9e9e9;
                    padding-bottom: ${padStatus + 0.5}rem
                }
            `}</style>
        </div>
    );
};
export default Ground;