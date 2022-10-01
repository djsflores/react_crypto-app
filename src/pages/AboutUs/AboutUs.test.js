import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AboutUs from './AboutUs';

const testId = 'us-test';

describe('AboutUs Test', () => {
  test('Deberia renderizar la pagina AboutUs', () => {
    render(<AboutUs />, { wrapper: MemoryRouter });
    const element = screen.getByTestId(testId);
    expect(element).toBeInTheDocument();
  });
});
