import { Routes, Route } from 'react-router-dom';

import EditUsers from 'pages/EditUsers/EditUsers';
import Users from 'pages/Users/Users';
import SharedLayout from 'components/SharedLayout/SharedLayout';

import { AppStyled } from './App.styled';

const App: React.FC = (): React.ReactElement => {
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
