describe("dummy tickets",()=>{
    it("booking dummy tickets",()=>{
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get("#product_551").check()
        cy.get("#travname").type("muni")
        cy.xpath("//input[@id='travlastname']").type("siva")
       cy.get("#dob").click()
       cy.get(".ui-datepicker-month").select("May")
       cy.get(".ui-datepicker-year").select("2000")
       cy.get("tbody>tr>td>a").each((x)=>{
        var datavalue=x.text()
        if(datavalue==19){
            cy.wrap(x).click()
        }
       })
       cy.get("#sex_1").check()
          .should("be.checked")
          cy.get(".input-checkbox.thwcfe-input-field").check()
          cy.get("#select2-addpaxno-container").click()
          cy.get(".select2-search__field").type("add 1 more passenger (100%)").type('{Enter}')
           cy.xpath("//input[@name='travname2']").type("bala")
           cy.get("#travlastname2").type("hari")
           cy.get("#dob2").click()
           cy.get(".ui-datepicker-month").select("Mar")
           cy.get(".ui-datepicker-year").select("1990")
           cy.get("tbody>tr>td>a").each((x)=>{
            let datavalue=x.text()
            if(datavalue==12){
                cy.wrap(x).click()
            }
           })
           cy.get("#sex2_2").check().should("be.checked")
           cy.get('#select2-paxtype2-container').click()
           cy.get(".select2-search__field").type('Child').type("{Enter}")
            cy.get("#traveltype_2").check()
            cy.get("#fromcity").type("nellore")
            cy.get("#tocity").type("hyderabad")
            cy.get("#departon").click()
            cy.get(".ui-datepicker-month").select("Dec")
            cy.get(".ui-datepicker-year").select("2025")
            cy.get("tbody>tr>td>a").each((v)=>{
                const datavalue=v.text()
                if(datavalue==12){
                    cy.wrap(v).click()
                }
            })
            cy.get("#notes").type("i have to go london")
            cy.get("#select2-reasondummy-container").click()
            cy.get(".select2-search__field").type("prank")
            cy.get('span>ul>li').click()
            cy.get("#deliverymethod_2").check()
            cy.get("#billname").type("munisiva")
            cy.get("#billing_phone").type("7013760477")
            cy.get("#billing_email").type("munisiva48@gmail.com")
            //cy.get("#select2-billing_country-container").click()


//             cy.get('select#country option').then(options => {
//   const randomIndex = Math.floor(Math.random() * options.length);
//   cy.get('select#country').select(options[randomIndex].value);
// });
            cy.get('[aria-label="Country"]').click();
            cy.get('span > ul > li').then(list => {
            cy.wrap(list[Math.floor(Math.random()*list.length)]).click();
            });

            cy.get('[id="billing_address_1"]').type("mannarpolur")
            cy.get('[id="billing_address_2"]').type("venugopalswamy street")
            cy.get('[id="billing_city"]').type("sullurpeta")
            cy.get('[id="billing_state"]').type("nellore")
            cy.get('[id="billing_postcode"]').type("54421")
            cy.get(".select2-selection.select2-selection--single").eq(0).click()
            cy.get(".select2-search__field").type("Santa Fe").type("{Enter}")
            cy.get('[id="place_order"]').click()

        })
        
    })        

