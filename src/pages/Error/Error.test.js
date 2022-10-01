import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Error from './Error';

const testId = 'error-test';

describe('Error Test', () => {
  test('Deberia renderizar la pagina Error', () => {
    render(<Error />, { wrapper: MemoryRouter });
    const element = screen.getByTestId(testId);
    expect(element).toBeInTheDocument();
  });
});
