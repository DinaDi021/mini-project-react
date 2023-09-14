import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {upcomingService} from "../../services";

const initialState = {
    upcomingMovies: [],
    page: 0,
    totalPages: 0,
    errors: null
}

const getMovies = createAsyncThunk(
    'upcomingSlice/getMovies',
    async ({page}, thunkAPI) => {
        try {
            const response = await upcomingService.getAll(page);
            const {total_pages, results} = response.data;
            thunkAPI.dispatch(upcomingActions.setTotalPages(total_pages));
            return {total_pages, results};
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const upcomingSlice = createSlice({
    name: 'upcomingSlice',
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
            state.upcomingMovies = results
        })
        .addCase(getMovies.rejected, (state, action) => {
            state.errors = action.payload;
        })
})

const {reducer: upcomingReducer, actions} = upcomingSlice;

const upcomingActions = {
    ...actions,
    getMovies
}

export {
    upcomingReducer,
    upcomingActions
}