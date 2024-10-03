import { FC, ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';

import { EditUsers, Users } from 'pages';

import SharedLayout from 'components/SharedLayout/SharedLayout';

import { AppStyled } from './App.styled';

const App: FC = (): ReactElement => {
  return (
    <AppStyled>
      <Routes>
        <Route element={<SharedLayout />}>
          <Route index element={<Users />} />
          <Route path="edit-users" element={<EditUsers />} />
        </Route>
      </Routes>
    </AppStyled>
  );
};

export default App;
