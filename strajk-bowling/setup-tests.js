import { afterAll, afterEach, beforeAll } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { server } from './src/mocks/setup';

// This does not work
// beforeEach(() => {
//     render(<App/>)
// })

afterEach(() => {
    cleanup();
});

beforeAll(() => {
    server.listen();
});

afterAll(() => {
    server.close();
});