import { createSlice } from '@reduxjs/toolkit';
import { booksData } from '../utils/dummyData';

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    items: booksData,    
  },
  reducers: {
    addBook: (state, action) => {
      // Create a new ID for the book
      const newId = state.items.length > 0 ? Math.max(...state.items.map(b => b.id)) + 1 : 1;
      state.items.push({ ...action.payload, id: newId });
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;