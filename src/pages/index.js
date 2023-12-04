import React from 'react';

import { TitleText } from '../components/TitleText/TitleText';
import { AppHeader } from '../components/AppHeader';
import {
  CheckContentButton,
  CheckContentText,
} from '../components/CheckContent/CheckContent';

const IndexPage = () => (
  <>
    <TitleText />
    <AppHeader />
    <CheckContentText />
    <CheckContentButton />
  </>
);

export default IndexPage;

export const Head = () => <title>Home Page</title>;
