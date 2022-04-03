import { Layout } from '../../Layout/Layout';
import { useAuth0 } from '@auth0/auth0-react';

export const Profile = () => {
  const { user } = useAuth0();

  const renderProfile = () => (
    <Layout title="Profile Information" background={false}>
      <section className="profile-container container">
        <img
          src={user?.picture}
          alt={user?.nickname}
          className="rounded-circle"
        />
        <h4>{user?.nickname}</h4>
        <h5>{user?.email}</h5>
      </section>

      <pre>{JSON.stringify(user, null, 2)}</pre>
    </Layout>
  );

  return <>{renderProfile()}</>;
};
