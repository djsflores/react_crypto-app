import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header test', () => {
  test('Esperamos que renderice el componente Header', () => {
    render(<Header />);
    const element = screen.getByText('CoinFiona');
    expect(element).toBeInTheDocument();
  });
});
