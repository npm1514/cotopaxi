import React from 'react';
import { hydrate, render } from 'react-dom';
import Impact from '../pages/ImpactPage';

if (window)
  render(
    <Impact data={window.__DATA__} />,
    document.getElementById('app')
  );
