// <referrence types="cypress"/>

describe("alerts",()=>{
    it("by using ok button",()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get('[onclick="jsAlert()"]').click()
        cy.on("window:alert",(t)=>{
            expect(t).to.contains("I am a JS Alert")
       
       
         })
          cy.get("#result").should('have.text','You successfully clicked an alert')
    })
   it("by using confirm alert",()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get('[onclick="jsConfirm()"]').click()
        // cy.on("window:confirm",(t)=>{
        //     expect(t).to.conntains("I am a JS Confirm")
        // })
       // cy.get("#result").should('have.text',"You clicked: Ok")
        cy.on("window:confirm",()=>false)
        cy.get("#result").should('have.text','You clicked: Cancel')
    })
    it("prompt alerts",()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.window().then((win)=>{
        cy.stub(win,"prompt").returns("muni")

        })
        cy.get('[onclick="jsPrompt()"]').click()
        cy.on("window:prompt",()=>false)
        cy.get("#result").should("have.text","You entered: muni")
    })
    it("authenticate alerts",()=>{
        cy.visit("https://the-internet.herokuapp.com/basic_auth",{auth:{username:"admin",password:"admin"}})
        // cy.on("window:prompt",()=>false)
    })
    it.only("authenticate another type",()=>{
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
        cy.get(".example").should("have.contain","Congratulations")
       // .and("have.text","Congratulations! You must have the proper credentials.")
    })

})