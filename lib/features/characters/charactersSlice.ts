import { RootState } from "./../../store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  Character,
  caractersState,
  getSearchCharactersAsync,
} from "./initialStateCharacters";

export const charactersSlice = createSlice({
  name: "characters",
  initialState: caractersState,
  reducers: {
    SELECTEDLIST_ADD: (state, action: PayloadAction<{ item: Character }>) => {
      state.selectedCharacters.push({ ...action.payload.item });
      state.items = state.items.map((ch) => {
        if (ch.id === action.payload.item.id) return { ...ch, added: true };
        return ch;
      }) as Character[];
    },
    SELECTEDLIST_REMOVE: (
      state,
      action: PayloadAction<{ item: Character }>
    ) => {
      state.selectedCharacters = state.selectedCharacters.filter(
        (ch) => ch.id !== action.payload.item.id
      );
      state.items = state.items.map((ch) => {
        if (ch.id === action.payload.item.id) return { ...ch, added: false };
        return ch;
      }) as Character[];
    },
    SELECTEDLIST_ALL_REMOVE: (state) => {
      state.selectedCharacters = [];
      state.searchText=""
    },

    SEARCH_TEXT: (state, action: PayloadAction<{ text: string }>) => {
      state.searchText = action.payload.text;
    },
    ITEMS_ALL_REMOVE: (state) => {
      state.items = [];
      state.searchText=""
    },
  },

  extraReducers: (builder) => {
    // getTodos
    builder
      .addCase(getSearchCharactersAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getSearchCharactersAsync.fulfilled, (state, action) => {
        console.log(action.payload);

        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(getSearchCharactersAsync.rejected, (state, action) => {
        state.isLoading = false;

        if (action.error.code === "ERR_BAD_REQUEST") {
          console.log(action.error.code);

          state.items = [] as Character[];
        }
        state.error = action.error.code;
      });
  },
});

export const {
  SELECTEDLIST_ADD,
  SELECTEDLIST_REMOVE,
  SEARCH_TEXT,
  ITEMS_ALL_REMOVE,
  SELECTEDLIST_ALL_REMOVE,
} = charactersSlice.actions;

export const selectFiltredItems = (state: RootState) => state.characters.items;
export const selectSelectedItems = (state: RootState) =>
  state.characters.selectedCharacters;

export default charactersSlice.reducer;
