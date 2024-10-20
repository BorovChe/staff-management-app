import { FC, JSXElementConstructor, ReactElement } from 'react';
import { useRoutes } from 'react-router-dom';

import { errorPage, privateRoutes, publicRoutes } from 'common/routes/routes';

const App: FC = (): ReactElement<any, string | JSXElementConstructor<any>> | null => {
  return useRoutes([publicRoutes, privateRoutes, errorPage]);
};

export default App;
