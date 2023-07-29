const baseURL = 'https://api.themoviedb.org/3'

const movies = '/discover/movie'
const topRated = '/movie/top_rated'
const upcoming = '/movie/upcoming'
const popular = '/movie/popular'
const genre = '/genre/movie/list'
const movie = '/movie'
const video = '/movie'

const urls = {
    movies,
    topRated,
    upcoming,
    popular,
    genre,
    movie: {
        byId: (id) => `${movie}/${id}`
    },
    video: {
        byId: (id) => `${video}/${id}/videos`
    }
}

export {
    baseURL,
    urls
}