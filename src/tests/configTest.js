import React from 'react';
import { render } from '@testing-library/react';

import ReduxProvider from '../app/coinProviderRedux';

afterAll(() => jest.clearAllMocks());

const AllTheProviders = ({ children }) => {
  return (
    <ReduxProvider>
        {children}
    </ReduxProvider>
  );
};

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export * from '@testing-library/jest-dom';

export { customRender as render };
