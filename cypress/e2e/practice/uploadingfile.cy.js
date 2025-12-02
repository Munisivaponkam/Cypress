describe("uploading files",()=>{

beforeEach(()=>{
    cy.visit("https://testautomationpractice.blogspot.com/")
})


    it("single file upload",()=>{
       // cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("#singleFileInput").attachFile("mummy.pdf")
        cy.xpath("//button[text()='Upload Single File']").click()
        cy.get("#singleFileStatus").should("be.visible")
    })


    it("file upload after rename",()=>{
       //  cy.visit("https://testautomationpractice.blogspot.com/")
          cy.get("#singleFileInput").attachFile({filePath:"mummy.pdf",fileName:"amma.pdf"})
         cy.xpath("//button[text()='Upload Single File']").click()
        cy.get("#singleFileStatus").should("be.visible")
    })


    it("multiple files upload",()=>{
        
        cy.get("#multipleFilesInput").attachFile("mummy.pdf","nonitresume.pdf")
        cy.xpath("//button[text()='Upload Multiple Files']").click()
        cy.get("#multipleFilesStatus").should("be.visible")
    })

})