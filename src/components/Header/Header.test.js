import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Header from './Header';
import store from '../../app/store';

describe('Header test', () => {
  test('Esperamos que renderice el componente Header', () => {
    render(<Provider store={store}><Header /></Provider>);
    const element = screen.getByText('CoinFiona');
    expect(element).toBeInTheDocument();
  });
});
