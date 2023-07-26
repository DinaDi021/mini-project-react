const baseURL = 'https://api.themoviedb.org/3'

const movies = '/discover/movie'
const topRated = '/movie/top_rated'
const genre = '/genre/movie/list'
const movie = '/movie'
const urls = {
    movies,
    topRated,
    genre,
    movie: {
        byId: (id) => `${movie}/${id}`
    }
}

export {
    baseURL,
    urls
}