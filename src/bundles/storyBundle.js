import React from 'react';
import { hydrate, render } from 'react-dom';
import Story from '../pages/StoryPage';

if (window)
  render(
    <Story data={window.__DATA__} />,
    document.getElementById('app')
  );
