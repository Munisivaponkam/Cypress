describe("nopcommerce practice",()=>{
it("first scenario",()=>{
    //visit the  website
    cy.visit("https://www.demoblaze.com/")
      //click on the sign up

    //click on first product 
    cy.xpath("//a[text()='Samsung galaxy s6']").click()
    //click on the add to cart
    cy.get(".btn.btn-success.btn-lg").click()
    //click OK for the alert
     cy.on("window:alert",(t)=>{
            expect(t).to.contains("Product added")})
     // click the cart button
     cy.get("#cartur").click()
  
//click on the place order
cy.get(".btn.btn-success").click()
//write the place order details
cy.get("#name").type('muni')
cy.get("#country").type('Russia')  
cy.get("#city").type("nellore")
cy.get("#card").type("726253442221")
cy.get("#month").type("02") 
cy.get("#year").type("36")
cy.xpath("//button[@onclick='purchaseOrder()']").click()
cy.get(".confirm.btn.btn-lg.btn-primary").click()
 
 })


})




