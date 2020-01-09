import React from 'react';
import { hydrate, render } from 'react-dom';
import Help from '../pages/HelpPage';

if (window)
  render(
    <Help data={window.__DATA__} />,
    document.getElementById('app')
  );
