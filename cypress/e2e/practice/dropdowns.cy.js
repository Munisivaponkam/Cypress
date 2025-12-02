describe("dropdowns",()=>{
    it("dropdown with selecting",()=>{
        //visit site
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        //click on the button and fill the stuff and click on the enter
         cy.get("#select2-reasondummy-container").click()
         cy.get(".select2-search__field").type("Prank a friend").type('{Enter}')
         cy.get("#select2-billing_country-container").click()
         cy.get(".select2-search__field").type("Australia").type("{Enter}")
         //user should a able to visit the dash  board
       // cy.get(".select2-search__field") .should("have.text",'Australia')

    })
})