import React, { useEffect, useState } from 'react';

import MobileHeader from '../MobileHeader';
import DesktopHeader from '../DesktopHeader';
import LeftColumn from '../LeftColumn';
import MiddleColumn from '../MiddleColumn';
import RightColumn from '../RightColumn';
import AdBanner from '../AdBanner';

import { Container } from './styles';

const Layout: React.FC = () => {
  // Controle de quando exibir o shimmer ou não
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      // esperando 1 segundo para o deixar o isloading false
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <Container>
      <MobileHeader />
      <DesktopHeader />

      <span>
        <AdBanner />
      </span>

      <main>
        <LeftColumn isLoading={isLoading} />
        <MiddleColumn />
        <RightColumn />
      </main>
    </Container>
  );
};

export default Layout;
