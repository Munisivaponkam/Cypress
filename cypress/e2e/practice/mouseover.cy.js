import '@4tw/cypress-drag-drop';

describe("mouseover",()=>{
    it("approach1",()=>{
        cy.visit("https://vinothqaacademy.com/mouse-event/")
        cy.xpath("(//a[text()='Self Paced Video Course'])[2]").trigger("mouseover")
        cy.xpath("(//a[text()='Selenium Course Curriculum'])[2]").click({force:true})
        cy.url().should("eq","https://vinothqaacademy.com/selenium-self-paced-video-course/")
    })
    it("double click",()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.xpath("//button[text()='Copy Text']").trigger("dblclick")
        cy.get("#field2").should("have.value","Hello World!")

    })
    it("drag and drop",()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get(".ui-widget-content.ui-draggable.ui-draggable-handle").drag(".ui-widget-header.ui-droppable",{force:true})
    })
    it.only("scrollinto view",()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        
        cy.xpath("//h2[text()='Dynamic Web Table']").scrollIntoView({duration:3000})
       
        cy.xpath("(//a[text()='Home'])[3]").scrollIntoView({duration:3000})
    })
})