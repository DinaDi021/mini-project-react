import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {topRatedService} from "../../services";

const initialState = {
    topRated: [],
    sortedTopRated: [],
    page: 0,
    totalPages: 0,
    sortOrder: 'asc',
    errors: null
}

const getTopRatedMovies = createAsyncThunk(
    'topRatedSlice/getTopRatedMovies',
    async ({ page }, thunkAPI) => {
        try {
            const response = await topRatedService.getAll(page);
            const { total_pages, results } = response.data;
            thunkAPI.dispatch(topRatedActions.setTotalPages(total_pages));
            return { total_pages, results };
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

const topRatedSlice = createSlice({
    name: 'topRatedSlice',
    initialState,
    reducers: {
        setTotalPages: (state, action) => {
            state.totalPages = action.payload;
        },
        setSortedTopRated: (state, action) => {
            state.sortedTopRated = action.payload;
        },
        setSortOrder: (state, action) => {
            state.sortOrder = action.payload;
        }
    },
    extraReducers: builder => builder
        .addCase(getTopRatedMovies.fulfilled, (state, action) => {
            const {page, total_pages, results} = action.payload;
            state.page = page
            state.totalPages = total_pages
            state.topRated = results
        })
        .addCase(getTopRatedMovies.rejected, (state, action) => {
            state.errors = action.payload;
        })
})

const {reducer: topRatedReducer, actions} = topRatedSlice;

const topRatedActions = {
    ...actions,
    getTopRatedMovies,
}

export {
    topRatedReducer,
    topRatedActions

}