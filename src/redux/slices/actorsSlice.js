import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {castService} from "../../services";

const initialState = {
    actors: [],
    crew: [],
    errors: null
}

const getActorsByMovieId = createAsyncThunk(
    'actorsSlice/getActors',
    async ({id}, thunkApi) => {
        try {
            const {data} = await castService.getById(id);
            return data;
        } catch (e) {
            return thunkApi.rejectWithValue(e.response.data)
        }
    }
)

const actorsSlice = createSlice({
    name: 'actorsSlice',
    initialState,
    reducers: {
    },
    extraReducers: builder => builder
        .addCase(getActorsByMovieId.fulfilled, (state, action) => {
            state.actors = action.payload.cast
            state.crew = action.payload.crew
        })
        .addCase(getActorsByMovieId.rejected, (state, action) => {
            state.errors = action.payload;
        })
})

const {reducer: actorsReducer, actions} = actorsSlice;

const actorsActions = {
    ...actions,
    getActorsByMovieId
}

export {
    actorsReducer,
    actorsActions
}