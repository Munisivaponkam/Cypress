
describe('naveen automation pracctice site', () => {

  it('just we are practice', () => {
     cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
     cy.title().should("eq","OrangeHRM")
  })
})