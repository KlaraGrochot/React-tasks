import React from 'react';

import { text } from './CheckContent.module.scss';
import { button } from './CheckContent.module.scss';

export let CheckContentText = () => (
  <p className={`${text} checkContentText`}>Turned Off</p>
);

export let CheckContentButton = () => (
  <button className={`${button} checkContentButton`}>Turn On</button>
);
