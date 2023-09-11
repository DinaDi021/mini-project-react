import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genreService} from "../../services";

const initialState = {
    genres: [],
    selectedGenreId: null
}

const getGenre = createAsyncThunk(
    'genreSlice/getGenre',
    async (_, thunkAPI) => {
        try {
            const {data} = await genreService.getAll()
            return data.genres
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {
        setGenre: (state, action) => {
            state.selectedGenreId = action.payload;
        },
        clearGenre: (state) => {
            state.selectedGenreId = null;
        },
    },
    extraReducers: builder => builder
        .addCase(getGenre.fulfilled, (state, action) =>{
            state.genres = action.payload
        })
})

const {reducer: genreReducer, actions: {setGenre, clearGenre}} = genreSlice;

const genreActions = {
    getGenre,
    setGenre,
    clearGenre
}

export {
    genreReducer,
    genreActions
}