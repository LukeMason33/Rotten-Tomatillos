describe('Single Movie Page', () => {
  it('Should be able to visit single movie page', () => {
    cy.fixture('../fixtures/mulan-trailer.json')
      .then((response) => {
      cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/337401/videos", {
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
    cy.visit('http://localhost:3000/singleMovie/Mulan/337401')
  })

  it('Should display the title', () => {
    cy.get('.single-movie-dashboard').should('contain', 'Mulan')
  })

  it('Should no longer render the searchbar and filter components', () => {
    cy.get('Header .header-search-bar').should('not.exist')
    cy.get('Header .header-filter').should('not.exist')
  })

  it('Should give the user an option to view the trailer', () => {
    cy.get('.single-movie-buttons-container .view-trailer-btn').should('contain', 'Trailer')
  })

  it('Should display the trailer and hide movie details when clicking on View Trailer button', () => {
    cy.get('.view-trailer-btn').click()
    cy.get('.movie-trailer')
    cy.get('.single-movie-dashboard').should('not.exist')
  })

  it('Should be able to return to the movies detials from the movies trailer view', () => {
    cy.get('.back-to-details-btn').click()
    cy.get('.single-movie-dashboard')
    cy.get('.movie-trailer').should('not.exist')
  })

  it('Should be able to go back to main dashboard from movie trailer view', () => {
    cy.get('.view-trailer-btn').click()
    cy.get('.back-to-details-btn').click()
    cy.get('.main-dashboard')
  })

  it('Should be able to return to main dashboard from the single movie view by clicking Return To Dashboard button', () => {
    cy.visit('http://localhost:3000/singleMovie/Mulan/337401')
    cy.get('.back-to-main-btn').click()
    cy.on("url:changed", (newUrl) => {
      expect(newUrl).to.contain("/")
    })
  })
})
