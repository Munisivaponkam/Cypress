describe("locators",()=>{
    //it("css",()=>{
       // cy.visit("https://naveenautomationlabs.com/opencart/")
        // cy.get('[type="text"]').type("mobiles")                 this is attribute
       // cy.get(".form-control.input-lg").type("mobiles")          this is class
      // cy.get(".form-control.input-lg[type='text']").type("mobiles")       this is class attributes
       // cy.get(".btn.btn-default.btn-lg").click()
      //  cy.xpath("//h1[contains(text(), 'Search - mobiles')]").contains("Search - mobiles")

   // })
    it("xpath",()=>{
        cy.visit("https://naveenautomationlabs.com/opencart/")
        cy.xpath("//input[@class='form-control input-lg']").type("mobiles")
        cy.xpath("//button[@class='btn btn-default btn-lg']").click()
        

    })

       
})