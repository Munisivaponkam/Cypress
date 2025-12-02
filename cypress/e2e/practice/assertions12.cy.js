describe("https://automationteststore.com/",()=>{
    it("assertions",()=>{
    cy.visit("https://automationteststore.com/")
    cy.xpath('//a[@href="https://automationteststore.com/index.php?rt=product/category&path=36"]').click().should("be.visible")
    cy.xpath('//a[@href="https://automationteststore.com/index.php?rt=product/category&path=36_39"]').should("be.visible")
      cy.xpath("//a[text()='Eyes']").click()
      cy.xpath("(//a[@class='dropdown-toggle'])[1]").click()
      cy.xpath('//a[@href="https://automationteststore.com/index.php?rt=product/category&path=36_39&currency=EUR"]').should("have.text","€ Euro")
      cy.xpath("(//a[@class='dropdown-toggle'])[2]").click()
      cy.get(".maintext").should('be.visible')
      cy.go("back")
      cy.get("div>div>form>select[id='sort']").select("Price High > Low")
       cy.get("div>div>form>select[id='sort']").should("contain","Price High > Low")
       cy.xpath('(//img[@src="//automationteststore.com/image/thumbnails/18/74/demo_product58_1_jpg-100168-250x250.jpg"])[1]').should("be.visible")
       cy.xpath("(//div[@class='oneprice'])[1]").should("be.visible")
       cy.get(".form-control.input-mini").select('30').should('have.value',"30")

})})