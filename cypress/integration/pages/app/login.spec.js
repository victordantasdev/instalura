/// <reference types="cypress" />

describe('/pages/app/login/', () => {
  // it === test
  it('preencha os campos e vá para a página /app/profile', () => {
    cy.intercept('https://instalura-api-git-master-omariosouto.vercel.app/api/login')
      .as('userLogin');

    cy.visit('/app/login/');

    // preencher o input usuario
    cy.get('#formCadastro input[name="usuario"]').type('victordantasdev');

    // preencher o input senha
    cy.get('#formCadastro input[name="senha"]').type('senhasegura');

    // clicar no botão submit
    cy.get('#formCadastro button[type="submit"]').click();

    // o que esperamos? ir para "/app/profile"
    cy.url().should('include', '/app/profile');

    // temos o token?
    cy.wait('@userLogin')
      .then((intercept) => {
        const { token } = intercept.response.body.data;

        cy.getCookie('APP_TOKEN')
          .should('exist')
          // Token do cookie é igual o token do server?
          .should('have.property', 'value', token);
      });
  });
});
