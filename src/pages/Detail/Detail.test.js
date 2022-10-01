import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Detail from './Detail';
import store from '../../app/store';

const testId = 'detail-test';

describe('Detail Test', () => {
  test('Deberia renderizar la pagina Detail', () => {
    render(<Provider store={store}><Detail /></Provider>, { wrapper: MemoryRouter });
    const element = screen.getByTestId(testId);
    expect(element).toBeInTheDocument();
  });
});
