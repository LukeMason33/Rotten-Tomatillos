const fetchRequests = {
  handleFetchError: (response) => {
   if(!response.ok) {
     throw response;
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
  }
}

export default fetchRequests;
