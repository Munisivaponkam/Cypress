describe("full page",()=>{
   it("practice",()=>{
    cy.visit('https://testautomationpractice.blogspot.com/')
    cy.get("h1[class='title']").should("be.visible")
    cy.get("#name").type("muni")
    cy.get("#email").type("muni123@gmail.com")
    cy.get("#phone").type("7462847382")
    cy.get("#textarea").type("nellore")
    cy.get("#male").check().should("be.checked")
    cy.get("#sunday").check().should("be.checked")
    cy.get("#monday").check().should("be.checked")
    cy.get("#tuesday").check().should("be.checked")
    cy.get("#country").select("Japan")
    cy.get("#colors").select(["Red", "Green"])
    cy.get("#animals").select("Cheetah")
    cy.xpath("//input[@id='datepicker']").type("19/6/2023")
    cy.get("#txtDate").eq(0).click({force:true})
    cy.get(".ui-datepicker-month").select(2)
    cy.get(".ui-datepicker-year").select("2019")
    cy.get('.ui-datepicker-calendar>tbody>tr>td').each((x)=>{
        let datavalue=x.text()
        if(datavalue==19)
            cy.wrap(x).click()
    })
    cy.get("#start-date").type("2015-03-22")
    cy.get("#end-date").type("2025-03-22")
    cy.get(".submit-btn").eq(0).click()
    cy.get('#singleFileInput').attachFile("nonitresume.pdf")
    cy.xpath("(//button[@type='submit'])[1]").click()
    cy.get("#multipleFilesInput").attachFile("nonitresume.pdf","mummy.pdf")
      cy.xpath("(//button[@type='submit'])[2]").click()
      cy.get('table>tbody>tr:nth-child(6)>td:nth-child(2)').should("contain","Amod")
      cy.get("#productTable>tbody>tr:nth-child(3)>td:nth-child(4)>input").check().should("be.checked")
      cy.get("#productTable>tbody>tr:nth-child(2)>td:nth-child(4)>input").check().should("be.checked")
      cy.get("#input1").type("munisiva is a good boy")
      cy.get("#btn1").click()
      cy.get(".start").eq(0).click()
 //simple alert
      cy.get("#alertBtn").eq(0).click()
      cy.on("window:alert",(x)=>{
        expect(x).to.contains("I am an alert box!")
 //confirm alert
        cy.get("#confirmBtn").eq(0).click()
        // cy.on("window:confirm",(x)=>{
        //     expect(x).to.contains("Press a button!")
        // })
        // cy.get("#demo").should("have.text","You pressed OK!")
         cy.on("window:confirm",()=>false)
         cy.get('#demo').should("have.text","You pressed Cancel!")
 //prompt alerts
 //by clicking cancel button on prompt
         cy.window().then((win)=>{
            cy.stub(win,"prompt")
         })
         cy.get("#promptBtn").click()
         cy.on("window:prompt",()=>false)
         cy.get("#demo").contains("User cancelled the prompt.")
//by clicking ok button on prompt laert
        //     cy.window().then((win)=>{
        //     cy.stub(win,"prompt").returns("munisiva")
        //  })
        //  cy.get("#promptBtn").click()
        //  cy.get("#demo").contains("Hello munisiva! How are you today?")
//open a new tab
    //  cy.window().then((win)=>{
    //     cy.stub(win,"open").as("windowopen")
    //  })
    //  cy.contains("New Tab").click()
    //  cy.get("@windowopen").should("be.calledWith","https://www.pavantestingtools.com/")
    // // cy.url("https://www.pavantestingtools.com/").click({Enter})
//mouseover
      cy.get(".dropbtn").eq(0).trigger("mouseover")
    //   cy.wait(5000)
    //   cy.xpath('//a[text()="Laptops"]').click()
//double click
      cy.get('button[ondblclick="myFunction1()"]').trigger("dblclick")
      cy.get("#field2").should("have.value","Hello World!")
//drag and drop
      cy.get("#draggable").eq(0).drag('div[id="droppable"]',{force:true})


      })


    })
   })




