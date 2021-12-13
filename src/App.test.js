import React from 'react';
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import Context from './context.js/myContext';
import Provider from './context.js/myProvider';
import { mockData } from './mockData';
import App from './App';

test('TESTANDO O APP', async () => {
  global.fetch = jest.fn(async endpoint => ({
    json: async () => mockData,
  }));

  render(
    <Provider initial={mockData}>
    {/* <Context.Provider value={{ meals: mockData, setMeals: () => {}}}> */}
      <App />
    {/* </Context.Provider>, */}
    </Provider>,
  );

  expect(global.fetch).toBeCalledTimes(1);

  const loadingEl = screen.getByText(/loading/i);
  expect(loadingEl).toBeInTheDocument();

  await waitForElementToBeRemoved(() => screen.getByText(/loading/i));

  const foodCorbaEl = await screen.findByRole('heading', { level: 2, name: /corba/i });
});
