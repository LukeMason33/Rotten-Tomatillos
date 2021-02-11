describe('Single Movie Page', () => {
  it('Should be able to visit single movie page', () => {
    cy.fixture('../fixtures/mulan.json')
      .then((response) => {
      cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/337401", {
        statusCode: 200,
        body: response
      })
    })
    cy.visit('http://localhost:3000/singleMovie/Mulan/337401')
  })

  it('Should display the title', () => {
    cy.get('.single-movie-dashboard').should('contain', 'Mulan')
  })

  it('Should be able to return to main dashboard by clicking Return To Dashboard button', () => {
    cy.get('.back-to-main-btn').click()
    cy.on("url:changed", (newUrl) => {
      expect(newUrl).to.contain("/")
    })
  })
})
