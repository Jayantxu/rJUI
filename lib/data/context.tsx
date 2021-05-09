import React from 'react';
export interface ConfigsFunc {
    headerTabFixed: boolean,
    updateHeaderTabFixed: (state: boolean) => void,
    isMobileType: boolean,
    updateIsMobileType: (state: boolean) => void,
    mobileMenuExpand: boolean,
    updateMobileMenuExpand: (state: boolean) => void
}
const defaultConfigs: ConfigsFunc = {
    headerTabFixed: false,
    updateHeaderTabFixed: (state) => {console.log(state);},
    isMobileType: false,
    updateIsMobileType: (state) => {console.log(state);},
    mobileMenuExpand: true,
    updateMobileMenuExpand: (state) => {console.log(state);}
};

export const configContext = React.createContext<ConfigsFunc>(defaultConfigs);

export const useConfigs = (): ConfigsFunc => React.useContext(configContext);