describe('Home page E2E', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000');
	});

	it('renders header, search bar and cards', () => {
		cy.get('.home-header').should('exist');
		cy.get('input[type="text"]').should('exist');
		cy.get('.cards-container').should('exist');
	});

	it('opens and closes modal when clicking add button', () => {
		cy.get('.home-header button').click();
		cy.get('[role="dialog"]').should('be.visible');
		cy.get('#textarea-add-phrase').should('exist');
		cy.get('#textarea-add-phrase').type('New test phrase');
		cy.get('#primary-button').click();
		cy.get('[role="dialog"]').should('not.exist');
	});

	it('filters cards when typing in search bar', () => {
		cy.get('.home-header button').click();
		cy.get('[role="dialog"]').should('be.visible');
		cy.get('#textarea-add-phrase').should('exist');
		cy.get('#textarea-add-phrase').type('New test phrase');
		cy.get('#primary-button').click();
		cy.get('input[type="text"]').type('New test phrase');
		cy.get('.cards-container').should('contain.text', 'New test phrase');
	});
});
