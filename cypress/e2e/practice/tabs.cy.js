describe("by using child tabs",()=>{
    it("approach1",()=>{
        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.xpath("//a[text()='Click Here']").invoke("removeAttr","target").click()
        cy.url().should("include","https://the-internet.herokuapp.com/windows/new")
        cy.wait(5000)
        cy.go("back")
    })


    it.only("approoach2",()=>{
        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.xpath("//a[text()='Click Here']").then((x)=>{
            var url=x.prop("href")
            cy.visit(url)
        })
        cy.url().should("include","https://the-internet.herokuapp.com/windows/new")
        cy.wait(5000)
        cy.go("back  ")
    })
})