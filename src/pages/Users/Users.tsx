import Section from 'components/Section/Section';
import UserList from 'components/Users/UserTable/UserTable';

const Users: React.FC = (): React.ReactElement => {
  return (
    <Section title="USERS" marginBottom="40px">
      <UserList />
    </Section>
  );
};

export default Users;
