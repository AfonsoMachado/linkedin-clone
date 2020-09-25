import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const ProfilePanel: React.FC = () => {
  return (
    <Panel>
      <Container>
        <div className="profile-cover"></div>
        <img
          src="https://avatars3.githubusercontent.com/u/11397955?s=460&u=e11b0f50547f9a3b9be9e8b076b652f374ff46b8&v=4"
          alt="Avatar"
          className="profile-picture"
        />
        <h1>Afonso Machado</h1>
        <h2>
          Graduating in Computer Engineering | Node.js | React | React Native
        </h2>

        <div className="separator"></div>

        <div className="key-value">
          <span className="key">Quem viu seu perfil</span>
          <span className="value">1.558</span>
        </div>
        <div className="key-value">
          <span className="key">Viram sua publicação</span>
          <span className="value">388</span>
        </div>
      </Container>
    </Panel>
  );
};

export default ProfilePanel;
