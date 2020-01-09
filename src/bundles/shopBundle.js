import React from 'react';
import { hydrate, render } from 'react-dom';
import Shop from '../pages/ShopPage';

if (window)
  render(
    <Shop data={window.__DATA__} />,
    document.getElementById('app')
  );
