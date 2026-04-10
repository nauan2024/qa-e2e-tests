describe('template spec', () => {
  it('Logar com sucesso', () => { 
    cy.viewport(1440, 900)
    cy.visit('http://localhost:3000/') 

    cy.get("#email").type("4dt@gmail.com")
    cy.get("#password").type("4DT")

    cy.contains("Button", "Entrar").click()

    cy.wait(2000)
  })
  it('campos em Branco Vazio', () => { 
    //cy.viewport(1440, 900)
    cy.visit('http://localhost:3000/') 

  

    cy.contains("Button", "Entrar").click()

    cy.contains("Ei, não esqueça de digitar seu email!")

    cy.contains("Você precisa de uma senha para entrar! 🔒")

    cy.wait(2000)

  })

  it('Testes Email Invalido', () => {
    cy.visit('http://localhost:3000/')
    cy.get("#email").type("3dt@gmail")
    cy.contains("Button", "Entrar").click()
        cy.wait(2000)
  })

  it('Testes Senha Invalido', () => {
    cy.visit('http://localhost:3000/')
    cy.get("#password").type("5DT")

    cy.contains("Button", "Entrar").click()
        cy.wait(2000)
  })
})