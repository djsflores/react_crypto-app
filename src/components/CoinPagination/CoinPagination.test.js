import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import CoinPagination from './CoinPagination';
import store from '../../app/store';

const testId = 'pagination-test';

describe('CoinPagination Test', () => {
  test('Deberia renderizar la pagina CoinPagination', () => {
    render(<Provider store={store}><CoinPagination /></Provider>, { wrapper: MemoryRouter });
    const element = screen.getByTestId(testId);
    expect(element).toBeInTheDocument();
  });
});
