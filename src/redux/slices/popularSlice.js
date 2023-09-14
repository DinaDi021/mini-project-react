import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {popularService} from "../../services";

const initialState = {
    popularMovies: [],
    page: 0,
    totalPages: 0,
    errors: null
}

const getMovies = createAsyncThunk(
    'popularSlice/getMovies',
    async ({page, genreId}, thunkAPI) => {
        try {
            const response = await popularService.getAll(page, genreId);
            const {total_pages, results} = response.data;
            thunkAPI.dispatch(popularActions.setTotalPages(total_pages));
            return {total_pages, results};
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const popularSlice = createSlice({
    name: 'popularSlice',
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
            state.popularMovies = results
        })
        .addCase(getMovies.rejected, (state, action) => {
            state.errors = action.payload;
        })
})

const {reducer: popularReducer, actions} = popularSlice;

const popularActions = {
    ...actions,
    getMovies
}

export {
    popularReducer,
    popularActions

}