import React from 'react';

import { Container, ProfileCircle, SearchInput, MessageIcon } from './styles';

const MobileHeader: React.FC = () => {
  return (
    <Container>
      <ProfileCircle src="https://avatars3.githubusercontent.com/u/11397955?s=460&u=e11b0f50547f9a3b9be9e8b076b652f374ff46b8&v=4" />
      <SearchInput placeholder="Pesquisar" />
      <MeassageIcon />
    </Container>
  );
};

export default MobileHeader;
