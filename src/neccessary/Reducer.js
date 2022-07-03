import { loginUrl } from "./Spotify";

export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: null,
    current_song: null,
    discover_weekly: null,
    isPlaying:false
};

const reducer = (state,action)=>{
    // console.log(action);
    switch(action.type){
        case "SET_USER":
            return{
                ...state,
                user:action.user,
            };
        case "SET_TOKEN":
            return{
                ...state,
                token:action.token,
            };
        case "SET_PLAYLISTS":
            return{
                ...state,
                playlists:action.playlists,
            };
        case "SET_DISCOVER_WEEKLY":
            return{
                ...state,
                discover_weekly:action.discover_weekly,
            };
        case "SET_CURRENT_PLAYING":
            // console.log(action.track);
            return{
                ...state,
                current_song:action.current_song,
            };
        case "SET_PLAYING_STATUS":
            // console.log(action.track);
            return{
                ...state,
                isPlaying:action.status,
            };
        default : 
        return state;
    }
}

export default reducer;