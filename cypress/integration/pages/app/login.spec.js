/// <reference types="cypress" />

describe('/pages/app/login/', () => {
  // it === test
  it('preencha os campos e vá para a página /app/profile', () => {
    cy.visit('/app/login/');

    // preencher o input usuario
    cy.get('#formCadastro input[name="usuario"]').type('victordantasdev');

    // preencher o input senha
    cy.get('#formCadastro input[name="senha"]').type('senhasegura');

    // clicar no botão submit
    cy.get('#formCadastro button[type="submit"]').click();

    // o que esperamos? ir para "/app/profile"
    cy.url().should('include', '/app/profile');
  });
});
