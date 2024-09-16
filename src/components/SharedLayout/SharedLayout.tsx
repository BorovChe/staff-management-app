import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'components/Header/Header';

const SharedLayout: React.FC = (): React.ReactElement => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
