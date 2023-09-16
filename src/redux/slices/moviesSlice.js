import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService, moviesService} from "../../services";

const savedMovie = localStorage.getItem('selectedMovie');
const initialState = {
    movies: [],
    movieByid: null,
    selectedMovie: savedMovie ? JSON.parse(savedMovie) : null,
    selectedSortBy: null,
    page: 0,
    totalPages: 0,
    errors: null
}

const getMovies = createAsyncThunk(
    'moviesSlice/getMovies',
    async ({page, genreId, sorted}, thunkAPI) => {
        try {
            const response = await moviesService.getAll(page, genreId, sorted);
            const {total_pages, results} = response.data;
            thunkAPI.dispatch(moviesActions.setTotalPages(total_pages));
            return {total_pages, results};
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const getMovieById = createAsyncThunk(
    'moviesSlice/getMovieById',
    async ({id}, thunkApi) => {
        try {
            const {data} = await movieService.getById(id);
            return data;
        } catch (e) {
            return thunkApi.rejectWithValue(e.response.data)
        }
    }
)

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {
        setTotalPages: (state, action) => {
            state.totalPages = action.payload;
        },
        setSelectedMovie: (state, action) => {
            state.selectedMovie = action.payload;
            localStorage.setItem('selectedMovie', JSON.stringify(action.payload));
        },
        setSortBy: (state, action) => {
            state.selectedSortBy = action.payload
            switch (action.payload) {
                case "popularity.asc":
                    state.movies = [...state.movies].sort((a, b) => a.popularity - b.popularity);
                    break;
                case "popularity.desc":
                    state.movies = [...state.movies].sort((a, b) => b.popularity - a.popularity);
                    break;
                case "vote_average.asc":
                    state.movies = [...state.movies].sort((a, b) => a.vote_average - b.vote_average);
                    break;
                case "vote_average.desc":
                    state.movies = [...state.movies].sort((a, b) => b.vote_average - a.vote_average);
                    break;
                case "release_date.asc":
                    state.movies = [...state.movies].sort((a, b) => a.release_date.localeCompare(b.release_date));
                    break;
                case "release_date.desc":
                    state.movies = [...state.movies].sort((a, b) => b.release_date.localeCompare(a.release_date));
                    break;
                case "none":
                    state.selectedSortBy = null;
                    break;
                default:
                    break;
            }
        },
        clearSort: (state) => {
            state.selectedSortBy = null;
        },
    },
    extraReducers: builder => builder
        .addCase(getMovies.fulfilled, (state, action) => {
            const {page, total_pages, results} = action.payload;
            state.page = page
            state.totalPages = total_pages
            state.movies = results
        })
        .addCase(getMovieById.fulfilled, (state, action) => {
            state.movieByid = action.payload
        })
        .addCase(getMovies.rejected, (state, action) => {
            state.errors = action.payload;
        })
})

const {reducer: moviesReducer, actions} = moviesSlice;

const moviesActions = {
    ...actions,
    getMovies,
    getMovieById
}

export {
    moviesReducer,
    moviesActions

}