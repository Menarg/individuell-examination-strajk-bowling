import { afterEach, beforeEach } from 'vitest';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

import App from './src/App';

afterEach(() => {
  cleanup();
});

beforeEach(() => {
    render(<App/>);
});