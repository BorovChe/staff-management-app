import { NavLink } from 'react-router-dom';

const Header: React.FC = (): React.ReactElement => {
  return (
    <header>
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
    </header>
  );
};

export default Header;
