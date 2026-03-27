describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')

    cy.get('#email').type("4dt@gmail.com")
    cy.get("#password").type("4DT")

    cy.contains("button", "Entrar").click()

    cy.contains("h4", "Formulários").click()

    cy.get("#name").type("Nauan Laurentino Silva")

    cy.get("#email").type("Nauan@2023")

    cy.get("#phone").type("11999990000").should("have.value", "(11) 99999-0000")
    //escolhe a formatação exata do telefone, se não estiver exatamente assim não será aceito

    cy.get("#consultancyType").select("In Company")

    cy.contains("span", "Pessoa Jurídica").click()

    cy.contains("Label", "Pessoa Física", {timeout: 10000}).find("input").should("be.not.checked")
    //validação para garantir que o campo "Pessoa Física" esteja desmarcado após clicar em "Pessoa Jurídica"

    cy.get("#document").type("12345678000100").should("have.value", "12.345.678/0001-00") 

    cy.contains("label", "Instagram").find("input").check().should("be.checked")

    const redes = [
      "Instagram",
      "LinkedIn",
      "Udemy",
      "YouTube",
      "Indicação de Amigo",
    ]

    redes.forEach((item1)=>{
      return(
        cy.contains("label", item1).find("input").check().should("be.checked")
      )
    })

    cy.get('input[type="file"]').selectFile("./cypress/fixtures/header.png", {force: true})

    cy.get("#details").type("Parabens acabou de funcionar, se leu me deve um bis")

    cy.get("#technologies").type("contratulations").type("{enter}").should("have.value", "")

    cy.contains("label", "Li e aceito os termos de uso").find("input").should("be.visible").check()

    cy.contains("button", "Enviar formulário").click()



   // cy.contains("input")


    cy.wait(20000)
  })
})