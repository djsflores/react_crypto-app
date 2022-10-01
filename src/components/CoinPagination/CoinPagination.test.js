import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CoinPagination from './CoinPagination';

const testId = 'pagination-test';

describe('CoinPagination Test', () => {
  test('Deberia renderizar la pagina CoinPagination', () => {
    render(<CoinPagination />, { wrapper: MemoryRouter });
    const element = screen.getByTestId(testId);
    expect(element).toBeInTheDocument();
  });
});
