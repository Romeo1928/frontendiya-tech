import { FC } from 'react';

import { UserType } from 'models/models.ts';

export const UserCard: FC<{ user: UserType }> = ({ user }) => {
  return (
    <div
      style={{
        background: '#a8a8a7',
        border: '3px',
        borderRadius: '3px',
        marginBottom: '20px',
        width: '500px',
      }}
    >
      <h2 style={{ textAlign: 'center' }}>{user.login}</h2>
      <div
        style={{
          padding: '10px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          src={user.avatar_url}
          alt={user.login}
          style={{
            width: '200px',
            height: '200ox',
            borderRadius: '50%',
          }}
        />
      </div>
    </div>
  );
};
