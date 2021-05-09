import React, { useState, useMemo } from 'react';
import { configContext as ConfigContext, ConfigsFunc } from './context';

// define PropsWithChildren? #https://www.newline.co/@bespoyasov/how-to-define-props-with-children-in-react-typescript-app--56bd18be
export const ConfigProvider: React.FC<React.PropsWithChildren<{}>> = React.memo(
    ({ children }) => {
      const [headerTabFixed, setHeaderTabFixed] = useState<boolean>(false);
      const updateHeaderTabFixed = (state: boolean) => setHeaderTabFixed(state);

      const initialValue = useMemo<ConfigsFunc>(
        () => ({
          headerTabFixed,
          updateHeaderTabFixed,
        }),
        [headerTabFixed],
      );
      return (
        <ConfigContext.Provider value={initialValue}>{children}</ConfigContext.Provider>
      );
    },
);