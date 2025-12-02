    describe("assertions",()=>{
//           it("implicts",()=>{
//             cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//             cy.url().should('include',"orangehrmlive.com")
//             cy.url().should('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//             cy.url().should('contain',"orangehrm")
//           })
//           it("implicit used another one   is and",()=>{
//  cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//             cy.url().should('include',"orangehrmlive.com")
//            .and('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//             .and('contain',"orangehrm")
//           })
//  it("it should not used only and ",()=>{
//  cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//             cy.url().should('include',"orangehrmlive.com")
//            .should('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//             .should('contain',"orangehrm")

//             cy.title().should("include","Orange")
//               .and("eq","OrangeHRM")
//               .and("contain","HRM")

//  })
//  it("title are coming or not and visible or not ",()=>{
//  cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//  cy.xpath('//img[@alt="company-branding"]').should("be.visible")
//  .and("exist")
//  })




it("explicit assertions",()=>{

  cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  cy.get('[placeholder="Username"]').type("Admin")
  cy.get('[placeholder="Password"]').type("admin123")
  cy.get(".oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button").click()
  let expName="Laura Karunarathne";
  cy.get(".oxd-userdropdown-name").then((x)=>{
    let actName=x.text()
    expect(actName).to.equal(expName)

  })
})
    })