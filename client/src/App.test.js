import React from 'react';
import * as rtl from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { render, waitForElement, getByText } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from './App';
import expectExport from 'expect';

test('renders without crashing', () => {
  render(<App />);
});

test('it displays the text Dark Mode', () => {
  const { getByText } = render(<App />);
  getByText('Dark Mode');
})

test('it displays the text Alex Morgan', async () => {
  const { getByText } = render(<App />);

  const player = await waitForElement(() => getByText('Alex Morgan'))
})
