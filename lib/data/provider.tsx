import React, { useState, useMemo } from 'react';
import { configContext as ConfigContext, ConfigsFunc } from './context';

// define PropsWithChildren? #https://www.newline.co/@bespoyasov/how-to-define-props-with-children-in-react-typescript-app--56bd18be
export const ConfigProvider: React.FC<React.PropsWithChildren<{}>> = React.memo(
    ({ children }) => {
      const [headerTabFixed, setHeaderTabFixed] = useState<boolean>(false);
      const updateHeaderTabFixed = (state: boolean) => setHeaderTabFixed(state);
      
      const [isMobileType, setIsMobileType] = useState<boolean>(false);
      const updateIsMobileType = (state: boolean) => setIsMobileType(state);

      const [mobileMenuExpand, setMobileMenuExpand] = useState<boolean>(true);
      const updateMobileMenuExpand = (state: boolean) => setMobileMenuExpand(state);
      
      const initialValue = useMemo<ConfigsFunc>(
        () => ({
          headerTabFixed,
          updateHeaderTabFixed,
          isMobileType,
          updateIsMobileType,
          mobileMenuExpand,
          updateMobileMenuExpand,
        }),
        [headerTabFixed, isMobileType, mobileMenuExpand],
      );
      return (
        <ConfigContext.Provider value={initialValue}>{children}</ConfigContext.Provider>
      );
    },
);