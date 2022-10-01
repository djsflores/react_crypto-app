import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import CoinTable from './CoinTable';
import store from '../../app/store';

const testId = 'table-test';

describe('CoinTable Test', () => {
  test('Deberia renderizar la pagina CoinTable', () => {
    const currentItems = jest.fn();
    render(<Provider store={store}>
            <CoinTable currentItems={currentItems} />
          </Provider>, { wrapper: MemoryRouter });
    const element = screen.getByTestId(testId);
    expect(element).toBeInTheDocument();
  });
});
