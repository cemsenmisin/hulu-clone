const API_KEY = process.env.API_KEY;

export default {
    fetchTrending: {
        title: 'Trending',
        url: `/trending/all/week?api_key=${API_KEY}&language=en=US` 
    },
    fetchTopRated: {
        title: "Top Rated",
        url: `/movie/top_rated?api_key=${API_KEY}&language=en=US` 
    },
    fetchActionMovies: {
        title: "ActionMovies",
        url: `/discover/top_rated?api_key=${API_KEY}&with_genres=28` 
    },
    fetchComedyMovies: {
        title: "ComedyMovies",
        url: `/discover/top_rated?api_key=${API_KEY}&with_genres=35` 
    },
    fetchHarrorMovies: {
        title: "HarrorMovies",
        url: `/discover/top_rated?api_key=${API_KEY}&with_genres=27` 
    },
    fetchRomanceMovies: {
        title: "RomanceMovie",
        url: `/discover/top_rated?api_key=${API_KEY}&with_genres=10749` 
    }, 
}
