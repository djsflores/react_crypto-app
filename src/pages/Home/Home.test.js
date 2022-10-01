import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

const testId = 'home-test';

describe('Home Test', () => {
  test('Deberia renderizar la pagina Home', () => {
    render(<Home />, { wrapper: MemoryRouter });
    const element = screen.getByTestId(testId);
    expect(element).toBeInTheDocument();
  });
});
