// https://docs.cypress.io/api/introduction/api.html

describe('Home test', () => {
  it('renders title', () => {
    cy.visit('http://localhost:8080');
    cy.contains('div', 'SqwaNews. Everything you need to know !');
  });

  it('renders headline section title', () => {
    cy.visit('http://localhost:8080');
    cy.contains('h1', 'Latest headlines');
  });
});

describe('Headline details test', () => {
  it('renders home button', () => {
    cy.visit('http://localhost:8080/headline/3');
    cy.contains('span', 'Go back home');
  });
});

describe('Error test', () => {
  it('renders error', () => {
    cy.visit('http://localhost:8080/error');
    cy.contains('div', 'Error: Request failed with status code 401');
  });
});
