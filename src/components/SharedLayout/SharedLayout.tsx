import { FC, ReactElement, Suspense } from 'react';

import { Outlet } from 'react-router-dom';

import Header from 'components/Header/Header';

const SharedLayout: FC = (): ReactElement => {
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
