describe('Error handling', () => {
  it('Should display an error message on screen if fetch requests fail', () => {
    cy.fixture('../fixtures/mulan.json')
      .then((response) => {
      cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/337401", {
        statusCode: 500,
        body: response
      })
    })
    cy.visit('http://localhost:3000/singleMovie/Mulan/337401')
    cy.get('.error-message')
  })

  it('Should display an error message on screen if fetch requests fail', () => {
    cy.fixture('../fixtures/allMovies.json')
    .then((response) => {
      cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
        statusCode: 500,
        body: response
      })
    })
    cy.visit('http://localhost:3000/')
    cy.get('.error-message')
  })
})
