import { FC, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar: FC = (): ReactElement => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="edit-users">Edit Users</NavLink>
        </li>
        <li>
          <NavLink to="/">Users</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
