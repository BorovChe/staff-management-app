import { FC, ReactElement, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import SideBar from 'components/SideBar/SideBar/SideBar';
import Header from 'components/Header/Header/Header';

import { BodyWrapperStyled, MainWrapperStyled } from './SharedLayout.styled';

const SharedLayout: FC = (): ReactElement => {
  return (
    <BodyWrapperStyled>
      <SideBar />
      <MainWrapperStyled>
        <Header />
        <main>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </main>
      </MainWrapperStyled>
    </BodyWrapperStyled>
  );
};

export default SharedLayout;
