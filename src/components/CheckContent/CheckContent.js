import React, { useState } from 'react';

import { textRedB, textGreenB, button } from './CheckContent.module.scss';

export const CheckContent = () => {
  const [turnedOn, setTurnedOn] = useState(false);
  const borderStyle = turnedOn ? textGreenB : textRedB;

  const handleButtonClick = () => {
    setTurnedOn(!turnedOn);
  };

  return (
    <div>
      <p className={borderStyle}>{turnedOn ? 'Turned On' : 'Turned Off'}</p>

      <button
        onClick={handleButtonClick}
        className={`${button} checkContentButton`}
      >
        {turnedOn ? 'Turn Off' : 'Turn On'}
      </button>
    </div>
  );
};
