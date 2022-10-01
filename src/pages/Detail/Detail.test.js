import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Detail from './Detail';

const testId = 'detail-test';

describe('Detail Test', () => {
  test('Deberia renderizar la pagina Detail', () => {
    render(<Detail />, { wrapper: MemoryRouter });
    const element = screen.getByTestId(testId);
    expect(element).toBeInTheDocument();
  });
});
