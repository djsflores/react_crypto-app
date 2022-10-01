import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';
import store from '../../app/store';

const testId = 'home-test';

describe('Home Test', () => {
  test('Deberia renderizar la pagina Home', () => {
    render(<Provider store={store}><Home /></Provider>, { wrapper: MemoryRouter });
    const element = screen.getByTestId(testId);
    expect(element).toBeInTheDocument();
  });
});
