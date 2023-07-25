const baseURL = 'https://api.themoviedb.org/3'

const movies = '/discover/movie'
const tv = '/discover/tv'
const genre = '/genre/movie/list'
const movie = '/movie'
const urls = {
    movies,
    tv,
    genre,
    movie: {
        byId: (id) => `${movie}/${id}`
    }
}

export {
    baseURL,
    urls
}