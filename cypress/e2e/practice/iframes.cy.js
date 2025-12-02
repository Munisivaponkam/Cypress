describe("iframes",()=>{
    it('approach1',()=>{
        cy.visit("https://demo.automationtesting.in/Frames.html")
     let iframe=cy.get("#singleframe")
                  .its("0.contentDocument.body")
                  .should('be.visible')
                  .then(cy.wrap) 
                  cy.wait(5000) 
                  cy.get("#singleframe").type("munisiva") 
    })
})