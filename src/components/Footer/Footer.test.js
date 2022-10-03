import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Footer from './Footer';
import store from '../../app/store';

describe('Footer test', () => {
  test('Esperamos que renderice el componente Footer', () => {
    render(<Provider store={store}><Footer /></Provider>);
    const element = screen.getByText('© 2022 Fiona Company, Inc');
    expect(element).toBeInTheDocument();
  });
});
