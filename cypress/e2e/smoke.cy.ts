/**
 * Example E2E Test.
 *
 * Besides the tests passes correctly, Cypress is giving us the following (uncaught exception) error:
 * Error: Hydration failed because the initial UI does not match what was rendered on the server.
 *
 * Remix team it's working on its fix already.
 * Check cypress/support/e2e for a detailed explanation.
 */
describe('Example test.', () => {
	it('Should display template name.', () => {
		cy.visit('/')
		cy.findByText('Discover Remix')
	})
})
