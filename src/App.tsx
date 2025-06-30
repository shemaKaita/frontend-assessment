import React, { FC } from 'react';
import Timeline from './components/Timeline';
import moments from './common/moments.json';
import { Moment } from './common/types';
import './App.scss';

const App: FC = () => {
  return (
    <main>
      <Timeline
        moments={moments as Moment[]}
        referenceDate='2024-01-01' // Example reference date
      />
    </main>
  );
}

export default App;
