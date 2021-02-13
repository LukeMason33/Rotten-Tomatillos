const fetchRequests = {
  handleFetchError: (response) => {
   if(!response.ok) {
     const errorMessage = 'Our server is having a hard time at the moment. Try refreshing the page!';
     throw errorMessage;
   }
   return response;
 },

  getAllMovies: () => {
    return fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then(response => fetchRequests.handleFetchError(response))
      .then(response => response.json())
  },

  getSingleMovie: (movieID) => {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieID}`)
      .then(response => fetchRequests.handleFetchError(response))
      .then(response => response.json())
  },

  getMovieTrailer: (movieID) => {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieID}/videos`)
      .then(response => fetchRequests.handleFetchError(response))
      .then(response => response.json())
  }
}

export default fetchRequests;
