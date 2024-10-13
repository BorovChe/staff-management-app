import { FC, ReactElement, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import SideBar from 'components/SideBar/SideBar/SideBar';
import Header from 'components/Header/Header';

import { BodyWrapperStyled } from './SharedLayout.styled';

const SharedLayout: FC = (): ReactElement => {
  return (
    <BodyWrapperStyled>
      <SideBar />
      <div>
        <Header />
        <main>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </BodyWrapperStyled>
  );
};

export default SharedLayout;
