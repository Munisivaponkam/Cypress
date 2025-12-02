describe("mytest suite",()=>{
// it("fixturedemo",()=>{


// cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
// cy.fixture("orangehrm").then((data)=>{
    
// cy.get("input[name='username']").type(data.username)
// cy.get("input[type='password']").type(data.password)
// cy.get("button[type='submit']").click()
// cy.xpath("//h6[text()='Dashboard']").should("have.text",data.expected)
// })



// })
// let userdata
// before(()=>{
// cy.fixture('orangehrm').then((data)=>{
//     userdata=data
// })

// })



// it("fixtureDemo2",()=>{

// cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    
// cy.get("input[name='username']").type(userdata.username)
// cy.get("input[type='password']").type(userdata.password)
// cy.get("button[type='submit']").click()
// cy.xpath("//h6[text()='Dashboard']").should("have.text",userdata.expected)
 
// })




it.only("mutiple fixtures demo",()=>{
cy.fixture("orangehrm2").then((data)=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    data.forEach((userdata)=>{
cy.get("input[name='username']").type(userdata.username)
cy.get("input[type='password']").type(userdata.password)
cy.get("button[type='submit']").click()
cy.get(".oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon").click()
cy.xpath("//a[text()='Logout']").click()
  
    if(userdata.username=="Admin"&&userdata.password=="admin123"){
        cy.xpath("//h6[text()='Dashboard']").should("have.text",userdata.expected)

    }
    else{
                cy.get(".oxd-alert-content.oxd-alert-content--error").should("have.text",userdata.expected)

    }
})


})
})  })