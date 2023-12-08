import React from 'react';

import { TitleText } from '../components/TitleText/TitleText';
import { AppHeader } from '../components/AppHeader';
import { CheckContent } from '../components/CheckContent/CheckContent';

const IndexPage = () => (
  <>
    <TitleText />
    <AppHeader />
    <CheckContent />
  </>
);

export default IndexPage;

export const Head = () => <title>Home Page</title>;
