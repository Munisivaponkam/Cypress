///<reference types="cypress"/>


describe("radio buttons",()=>{
    it("radio",()=>{
        cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/register")
        cy.get("#input-firstname").type("muni")
        cy.get("#input-lastname").type("siva")
        cy.get("input#input-email").type("munisiva@gmail.com")
        cy.xpath('//input[@id="input-telephone"]').type("7013740677")
        cy.get('[id="input-password"]').type("Muni123@")
        cy.get("#input-confirm").type("Muni123@")
        cy.get("[name='newsletter']").eq(0).check()
        cy.get("[name='agree']").check()
        cy.get("[value='Continue']").click()
    })



})