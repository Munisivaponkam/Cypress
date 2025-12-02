describe("web table",()=>{
    // beforeEach("visit",()=>{
    //     cy.visit("https://vinothqaacademy.com/webtable/")
it("check the no of rows and cols",()=>{
     cy.visit("https://vinothqaacademy.com/webtable/")
    cy.get("#myTable>tbody>tr").should("have.length","10")
    cy.get("#myTable>thead>tr>th").should("have.length","6")
})

it("name is in the specific row and col",()=>{
     cy.visit("https://vinothqaacademy.com/webtable/")
cy.get("table>tbody>tr:nth-child(3)>td:nth-child(2)").contains("Vinoth R")


//})


})
it.only("we have to get all the rows and col",()=>{
     cy.visit("https://vinothqaacademy.com/webtable/")
cy.get("#myTable>tbody>tr").each(($row,index,$rows)=>{
    cy.wrap($row).within(()=>{
        cy.get("td").each(($col,index,$cols)=>{
            cy.log($col.text() )
        })
    })
})



    })
})





