import { Book } from "@src/books/types";

import {configureStore, ReducersMapObject, ConfigureStoreOptions} from "@reduxjs/toolkit";

import bookReducer from "@src/books/reducer/BookReducer";

export interface  AppState {
  books: Book[];
}

const rootReducer: ReducersMapObject = {
  bookReducer: bookReducer,
};

const options: ConfigureStoreOptions = {
  reducer: rootReducer,
  preloadedState: {
    books: []
  }
}

export const store = configureStore(options);
