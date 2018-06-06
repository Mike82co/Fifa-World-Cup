describe('Test project 2',()=>{
    it('Should have a title',()=>{
        cy.visit('/')
        cy.title()
        .should('contain', 'World Cup Facts')
    })
    it('Should show a splash page', () =>{
        cy.get('.splashContainer h1')
        .should('contain' , 'Welcome Football Fans!')
    })
    it('Should display the stadiums when the Show/Hide stadiums is clicked',() =>{
        cy.get('button')
        .contains('Show/Hide Stadiums')
        .click()
        cy.get('.stadiumContainer .stadium')
        .should('have.length.gt', 1)        
    })
    it('Should display the list of teams when you click the Show/Hide Button',() =>{
        cy.get('button')
        .contains('Show/Hide Teams')
        .click()
        cy.get('ul li')
        .should('have.length.gt',1)
    })
    it('Should expand to display the text feild to select a player', () => {
        cy.get('button')
        .contains('Show Players')
        .click()
    })
    it('Should fetch a player based on the number inputed', () =>{
        cy.get('input')
        .type('65')
        cy.get('button')
        .contains('Get Player')
        .click()
    })
    it('Should display a player',() =>{
        cy.get('#playerName')
        .contains('Batgirl III')
    })
})