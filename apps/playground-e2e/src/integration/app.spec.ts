import { getGreeting } from '../support/app.po';

describe('playground', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome to playground!');
  });
});
