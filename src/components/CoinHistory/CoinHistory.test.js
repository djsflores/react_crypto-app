import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import CoinHistory from './CoinHistory';
import store from '../../app/store';

describe('CoinHistory test', () => {
  test('Esperamos que renderice el componente CoinHistory', () => {
    render(<Provider store={store}><CoinHistory /></Provider>);
    const element = screen.getByText('Grafico de Precios (USD)');
    expect(element).toBeInTheDocument();
  });
});
