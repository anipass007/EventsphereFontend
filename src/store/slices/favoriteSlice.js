import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    items: JSON.parse(localStorage.getItem("eventsphere-favorites")) || [],
  },
  reducers: {
    toggleFavorite(state, action) {
      const event = action.payload;
      const existingEvent = state.items.find(
        (e) => (e.id || e._id) === (event?.id || event?._id),
      );
      if (existingEvent) {
        // remove
        state.items = state.items.filter(
          (e) => (e.id || e._id) !== (event?.id || event?._id),
        );
      } else {
        state.items.push(event);
      }
      localStorage.setItem(
        "eventsphere-favorites",
        JSON.stringify(state.items),
      );
    },
    removeFavorite(state) {},
    clearFavorties(state) {
      state.items = [];
      localStorage.clear("eventsphere-favorites");
    },
  },
});

export const { toggleFavorite, removeFavorites, clearFavorties } =
  favoriteSlice.actions;

export default favoriteSlice.reducer; // connect with store
