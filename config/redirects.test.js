import redirects from './redirects';

// TDD
// Test Driven Development
describe('config/redirects', () => {
  test('renders all current redirects', () => {
    expect(redirects).toMatchSnapshot();
  });
});
