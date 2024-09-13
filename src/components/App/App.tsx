import { AppStyled } from './App.styled';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import Users from 'pages/Users/Users';
import { Routes, Route } from 'react-router-dom';

const App: React.FC = (): React.ReactElement => {
  return (
    <AppStyled>
      <Routes>
        <Route element={<SharedLayout />}>
          <Route index element={<Users />} />
        </Route>
      </Routes>
    </AppStyled>
  );
};

export default App;
