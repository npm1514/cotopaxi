import React from 'react';
import { hydrate, render } from 'react-dom';
import More from '../pages/MorePage';

if (window)
  render(
    <More data={window.__DATA__} />,
    document.getElementById('app')
  );
