import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {searchService} from "../../services";
import {progressActions} from "./ProgressSlice";

const initialState = {
    searchMovies: [],
    titleMovie: '',
    page: 0,
    totalPages: 0,
    errors: null
}

const getSearchMovies = createAsyncThunk(
    'searchMoviesSlice/getSearchMovies',
    async ({query, page}, thunkAPI) => {
        try {
            thunkAPI.dispatch(progressActions.setIsLoading(true))
            const response = await searchService.getAll(query, page);
            const {total_pages, results} = response.data;
            thunkAPI.dispatch(searchMoviesActions.setTotalPages(total_pages));
            return {total_pages, results};
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        } finally {
            thunkAPI.dispatch(progressActions.setIsLoading(false))
        }
    }
)

const searchMoviesSlice = createSlice({
    name: 'searchMoviesSlice',
    initialState,
    reducers: {
        setTotalPages: (state, action) => {
            state.totalPages = action.payload;
        },
        setTitleMovie: (state, action) => {
            state.titleMovie = action.payload;
        },
        clearSearchMovies: (state) => {
            state.searchMovies = [];
            state.titleMovie = null
            state.totalPages = 0
        },
    },
    extraReducers: builder => builder
        .addCase(getSearchMovies.fulfilled, (state, action) => {
            const {page, total_pages, results} = action.payload;
            state.page = page
            state.totalPages = total_pages
            state.searchMovies = results
        })
        .addCase(getSearchMovies.rejected, (state, action) => {
            state.errors = action.payload;
        })
})

const {reducer: searchMoviesReducer, actions} = searchMoviesSlice;

const searchMoviesActions = {
    ...actions,
    getSearchMovies
}

export {
    searchMoviesReducer,
    searchMoviesActions

}