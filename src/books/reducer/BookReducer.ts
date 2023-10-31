import {Book} from "@src/books/types";
import {AppState} from "../../../store/store";
import { createSlice, PayloadAction} from "@reduxjs/toolkit";



const bookSlice = createSlice<AppState>({
    name: 'books',
    initialState: { books: [] },
    reducers: {
        addBook: (state: AppState, action: PayloadAction<Book>) => {
            const book: Book = {
                ...action.payload,
                id: state.books.length === 0 ? 1 : state.books[state.books.length - 1].id + 1
            }
            return ({
            ...state,
            books: [...state.books, book]
        })},
        removeBook: (state: AppState, action: PayloadAction<number>) => {
            const updatedBooks = state.books.filter(book => book.id !== action.payload);
            return {
                ...state,
                books: updatedBooks
            }
        }
    }
});

export default bookSlice.reducer;

export const { addBook, removeBook } = bookSlice.actions;

