import React from 'react';
import { hydrate, render } from 'react-dom';
import Account from '../pages/AccountPage';

if (window)
  render(
    <Account data={window.__DATA__} />,
    document.getElementById('app')
  );
