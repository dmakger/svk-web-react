import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    elgDesktopWidth: false,
    lgDesktopWidth: false,
    mdDesktopWidth: false,
    smTabletsWidth: false,
    smMobileWidth: false,
    extraSmMobileWidth: false,
};

export const desktopWidthState = {
    elgDesktopWidth: 1440,
    lgDesktopWidth: 1200,
    mdDesktopWidth: 993,
    smTabletsWidth: 768,
    smMobileWidth: 480,
    extraSmMobileWidth: 320,
};


const screenSlice = createSlice({
    name: "screen",
    initialState,
    reducers: {
        setScreenWidth: (state, action) => {
            const {
                elgDesktopWidth,
                lgDesktopWidth,
                mdDesktopWidth,
                smTabletsWidth,
                smMobileWidth,
            } = initialState;

            const { payload } = action;

            state.elgDesktopWidth = payload <= elgDesktopWidth;
            state.lgDesktopWidth = payload > elgDesktopWidth && payload <= lgDesktopWidth;
            state.mdDesktopWidth = payload > lgDesktopWidth && payload <= mdDesktopWidth;
            state.smTabletsWidth = payload > mdDesktopWidth && payload <= smTabletsWidth;
            state.smMobileWidth = payload > smTabletsWidth && payload <= smMobileWidth;
            state.extraSmMobileWidth = payload > smMobileWidth;
        },
        setElgDesktopWidth: (state, action) => {
            const { payload } = action;
            state.elgDesktopWidth = payload;
        },
        setLgDesktopWidth: (state, action) => {
            const { payload } = action;
            console.log(action)
            state.lgDesktopWidth = payload;
        }
    },
});

export const screenData = (state) => state.screen;

export const { setScreenWidth, setLgDesktopWidth } = screenSlice.actions;

export default screenSlice.reducer;