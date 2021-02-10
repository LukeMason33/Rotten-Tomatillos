describe("Main Dasboard", () => {

  it('Should be able to visit the page', () => {
    cy.fixture('../fixtures/singleMovie.json')
    .then((response) => {
      cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919", {
        statusCode: 200,
        body: response
      })
    })
    cy.fixture('../fixtures/allMovies.json')
    .then((response) => {
      cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
        statusCode: 200,
        body: response
      })
    })
    cy.visit('http://localhost:3000/')
  })

  // it('Should render a header with correct elements', () => {
  //   cy.get('header')
  //     .contains('')
  // })
})
