import React from 'react';

import { TitleText } from '../components/TitleText/TitleText';
import { AppHeader } from '../components/AppHeader';
import { CheckContent } from '../components/CheckContent/CheckContent';
import { Counter } from '../components/Counter/Counter';

const IndexPage = () => (
  <>
    <TitleText />
    <AppHeader />
    <CheckContent />
    <Counter />
  </>
);

export default IndexPage;

export const Head = () => <title>Home Page</title>;
