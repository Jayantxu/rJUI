import React from 'react';
export interface ConfigsFunc {
    headerTabFixed: boolean,
    updateHeaderTabFixed: (state: boolean) => void
}
const defaultConfigs: ConfigsFunc = {
    headerTabFixed: false,
    updateHeaderTabFixed: (state) => {console.log(state);},
};

export const configContext = React.createContext<ConfigsFunc>(defaultConfigs);

export const useConfigs = (): ConfigsFunc => React.useContext(configContext);