import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Roses", duration: "4:57" },
    { title: "Ringa", duration: "3:02" },
    { title: "Billie", duration: "2:27" },
    { title: "Rover", duration: "6:01" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
