import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import store from '../../app/store';

describe('Header test', () => {
  test('Esperamos que renderice el componente Header', () => {
    render(<Provider store={store}><Router><Header /></Router></Provider>);
    const element = screen.getByText('CoinFiona');
    expect(element).toBeInTheDocument();
  });
});
