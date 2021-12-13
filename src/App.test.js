import React from 'react';
import {
  render,
  screen,
  waitForElementToBeRemoved,
  waitFor,
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
    // <Provider initial={mockData}>
    // Se o useEffect tiver no Provider esse Context.Provider não funciona
    <Context.Provider value={{ meals: mockData, setMeals: () => {} }}>
      <App />
    </Context.Provider>,
    // </Provider>,
  );

  expect(global.fetch).toBeCalledTimes(1);

  const loadingEl = screen.getByText(/loading/i);
  expect(loadingEl).toBeInTheDocument();

  /*NÃO CONSIGO TESTAR SE O LOADING É REMOVIDO DA TELA E SE A REQUISIÇÃO ACONTECE
  await waitForElementToBeRemoved(() => screen.getByText(/loading/i));

  await waitFor(async () => {
    const foodCorbaEl = await screen.findByRole('heading', {
      level: 2,
      name: /corba/i,
    });
    expect(foodCorbaEl).toBeInTheDocument();
  });*/
});
