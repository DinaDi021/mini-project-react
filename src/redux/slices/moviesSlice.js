import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService, moviesService} from "../../services";

const savedMovie = localStorage.getItem('selectedMovie');
const initialState = {
    movies: [],
    movieByid: null,
    selectedMovie: savedMovie ? JSON.parse(savedMovie) : null,
    page: 0,
    totalPages: 0,
    errors: null
}

const getMovies = createAsyncThunk(
    'moviesSlice/getMovies',
    async ({page, genreId}, thunkAPI) => {
        try {
            const response = await moviesService.getAll(page, genreId);
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
        }
    },
    extraReducers: builder => builder
        .addCase(getMovies.fulfilled, (state, action) => {
            const {page, total_pages, results} = action.payload;
            state.page = page
            state.totalPages = total_pages
            state.movies = results
        })
        .addCase(getMovieById.fulfilled, (state, action) =>{
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