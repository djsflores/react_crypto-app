import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import CoinHistory from './CoinHistory';
import store from '../../app/store';

window.ResizeObserver = function () {
  return {
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  };
};

describe('CoinHistory test', () => {
  test('Esperamos que renderice el componente CoinHistory', () => {
    render(<Provider store={store}><Router><CoinHistory /></Router></Provider>);
    const element = screen.getByText('Grafico de Precios (USD)');
    expect(element).toBeInTheDocument();
  });
});
