import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer test', () => {
  test('Esperamos que renderice el componente Footer', () => {
    render(<Footer />);
    const element = screen.getByText('© 2022 Fiona Company, Inc');
    expect(element).toBeInTheDocument();
  });
});
