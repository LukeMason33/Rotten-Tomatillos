describe("Main Dasboard", () => {
  it('Should be able to visit the page and load with Money Plane and Mulan movie cards', () => {
    cy.fixture('../fixtures/moneyPlane.json')
    .then((response) => {
      cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919", {
        statusCode: 200,
        body: response
      })
    })
    cy.fixture('../fixtures/mulan.json')
    .then((response) => {
      cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/337401", {
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

  it('Should render a header with correct elements', () => {
    cy.get('Header .logo').should('contain', 'Rotten Tomatillos')
      .get('Header .header-search-bar')
      .get('Header .header-filter')
  })

  it('Should render with movie cards in a container', () => {
    cy.get('.all-movies-container')
      .get('.all-movies-container #694919')
  })

  it('Movie card should contain the following elements', () => {
    cy.get('.movie-card Button').should('contain', 'Details')
    cy.get('.movie-card h1').should('contain', 'Money Plane')
  })

  it('Should be able to search movies by title', () => {
    cy.get('.header-search-bar input').type('money')
      .get('#337401').should('not.exist')
  })

  it('Should be able to clear search input to view all movies', () => {
    cy.get('.header-search-bar input').clear()
      .get('#337401').should('exist')
  })

  it('Should be able to click details button on movie card to be routed to single movie page that has more details on that movie', () => {
    cy.get('#337401 .movie-details-btn').click()
    cy.on("url:changed", (newUrl) => {
      expect(newUrl).to.contain("/Mulan/337401")
    })
  })
})
