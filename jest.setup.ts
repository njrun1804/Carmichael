// Custom matchers (v6+)
import '@testing-library/jest-dom';

// MSW: spin up the mock API server for all tests
import { server } from './src/mocks/server';

// Establish API-mocking before any tests run.
beforeAll(() => server.listen());

// Reset any runtime request handlers between tests.
afterEach(() => server.resetHandlers());

// Clean up once the tests are finished.
afterAll(() => server.close());
