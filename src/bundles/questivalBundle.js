import React from 'react';
import { hydrate, render } from 'react-dom';
import Questival from '../pages/QuestivalPage';

if (window)
  render(
    <Questival data={window.__DATA__} />,
    document.getElementById('app')
  );
