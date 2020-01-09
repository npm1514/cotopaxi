import React from 'react';
import { hydrate, render } from 'react-dom';
import International from '../pages/InternationalPage';

if (window)
  render(
    <International data={window.__DATA__} />,
    document.getElementById('app')
  );
