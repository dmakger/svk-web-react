import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    activeParent: '',
    activeChild: '',
};


const tocSlice = createSlice({
    name: "toc",
    initialState,
    reducers: {
        setToc: (state, action) => {
            const {parent, child} = action.payload;

            state.activeParent = parent
            state.activeChild = child
        }
    }
});

// export const selectTocData = (state) => state.toc;
export const selectTocData = (state) => state.toc;

export const {setToc} = tocSlice.actions;

export default tocSlice.reducer;