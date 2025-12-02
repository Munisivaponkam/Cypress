describe("practicing",()=>{
   it("place the order after registration",()=>{

    //visit the website which we need 
        cy.visit('https://automationteststore.com/')
    //click on the registration button
        cy.get("#customer_menu_top").click()
    // heading should be visisble or not 
    cy.xpath("//h2[text()='I am a new customer.']").should("be.visible")
    //click the registration 
    cy.get("#accountFrm_accountregister").check()
    cy.xpath("(//button[@type='submit'])[1]").click()
    cy.get(".maintext").should("be.visible")
    //write the regigrastion form
    cy.get("#AccountFrm_firstname").type("munisivaq")
    cy.get("#AccountFrm_lastname").type("ponkam")
    cy.get("#AccountFrm_email").type("munisivaq@gmail.com")
    cy.get("#AccountFrm_address_1").type("mannarpolur")
    cy.get("#AccountFrm_city").type("nellore")
    cy.get("#AccountFrm_zone_id").select("Perth and Kinross")

    cy.get("#AccountFrm_postcode").type("534672")
    cy.get("select[name='country_id']").type('India').type("{Enter}")
    //logi details
    cy.get("#AccountFrm_loginname").type("munisivaq")
    cy.get("#AccountFrm_password").type("Muni123@")
    cy.get("#AccountFrm_confirm").type("Muni123@")
    //by checking radio button for subscribe
    cy.get("#AccountFrm_newsletter0").check().should("be.checked")
    //by checking check box for terms &conditions
    cy.get("#AccountFrm_agree").check().should("be.checked")
    //by clicking continue button
    cy.get(".btn.btn-orange.pull-right.lock-on-click").click()
   


   })
   //after registration then login with valid creditials
  
   it.only("login after registration",()=>{
       cy.visit("https://automationteststore.com/index.php?rt=account/login")
       cy.xpath('//a[text()="Login or register"]').click()
       //headline is having or not 
       cy.xpath('//h2[text()="Returning Customer"]').should("contain","Returning Customer")
       cy.get("#loginFrm_loginname").clear().type("munisiva")
       cy.get("#loginFrm_password").clear().type("Muni123@")
       cy.get("button[title='Login']").click()
       //cy.xpath('//*[@id="categorymenu"]/nav/ul/li[2]/a').click({force:true})
       cy.xpath("//a[@href='https://automationteststore.com/index.php?rt=product/category&path=68']").click()
        cy.xpath('(//a[@href="https://automationteststore.com/index.php?rt=product/category&path=68_70"])[3]').click({force:true})
        cy.xpath("(//a[@class='productcart'])[1]").click()
        cy.xpath('(//a[@href="#"])[1]').click()
        cy.get('#cart_checkout1').click()
        cy.get("#checkout_btn").click()
        cy.get(".maintext").should("have.text"," Your Order Has Been Processed!")


       //after login valid credintials then click on accesories
      
     
      //clickon add cart
    //   cy.get('.productpagecart>li>a').click()
    //   //checkout by using click
    //   cy.get("#cart_checkout1").click()
    //   //confirm should be visible or not 
    //   cy.get('#checkout_btn').should("be.visible")
    //   //confirm order by clicking action
    //   cy.get("#checkout_btn").click()
    //   //order confirmation text should be have or not 
    //   cy.get(".maintext").should("have.text"," Your Order Has Been Processed!")

   
   })



})