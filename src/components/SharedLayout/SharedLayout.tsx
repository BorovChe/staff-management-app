import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const SharedLayout: React.FC = (): React.ReactElement => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <a href="EditUsers">Edit Users</a>
            </li>
            <li>
              <a href="Users">Users</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
