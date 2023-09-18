/// <reference types= "cypress" />

cy.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("aspire test cases", () => {
  it("randomly enter the website ", () => {
    let Websites =
      ["https://global.almosafer.com/ar", "https://global.almosafer.com/en"];
    let RandomIndes = Math.floor(Math.random() * Websites.length);

    cy.visit(Websites[RandomIndes]);

    let ArabicCities = ["جده","دبي"]
    let ArabicRandomIndex = Math.floor(Math.random()*ArabicCities.length )
    let englishCities = ["riyadh","dubai","jeddah"]
    let EnglishRandomIndex =Math.floor(Math.random()*englishCities.length)


    cy.get(".cta__saudi").click();
    cy.get('#uncontrolled-tab-example-tab-hotels').click();
    if (RandomIndes == 0){
      cy.get('[data-testid="AutoCompleteInput"]').type(ArabicCities[ArabicRandomIndex])}
      else{

      
      cy.get('[data-testid="AutoCompleteInput"]').type(englishCities[EnglishRandomIndex])
      }

    
  });
});
