import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services";

const initialState = {
    movies: [],
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

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {
        setTotalPages: (state, action) => {
            state.totalPages = action.payload;
        }
    },
    extraReducers: builder => builder
        .addCase(getMovies.fulfilled, (state, action) => {
            const {page, total_pages, results} = action.payload;
            state.page = page
            state.totalPages = total_pages
            state.movies = results
        })
        .addCase(getMovies.rejected, (state, action) => {
            state.errors = action.payload;
        })
})

const {reducer: moviesReducer, actions} = moviesSlice;

const moviesActions = {
    ...actions,
    getMovies
}

export {
    moviesReducer,
    moviesActions

}