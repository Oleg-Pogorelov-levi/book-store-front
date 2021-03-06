import { combineReducers } from "redux";
import { reducerMyProfile } from "./user";
import { reducerBooks } from "./books";
import { reducerBook } from "./book";
import { reducerAuthor } from "./author";
import { reducerSearchedBooks } from "./searched_books";
import { reducerNotification } from "./notification";
import { reducerSearchedAuthors } from "./searched_authors";
import { reducerToken } from "./token";
import { reducerSearchValue } from "./search_value";
import { reducerMessage } from "./message";
import { reducerStatusCode } from "./status_code";

export const rootReducer = combineReducers({
  user: reducerMyProfile,
  books: reducerBooks,
  searched_books: reducerSearchedBooks,
  searched_authors: reducerSearchedAuthors,
  book: reducerBook,
  author: reducerAuthor,
  notification: reducerNotification,
  token: reducerToken,
  search_value: reducerSearchValue,
  message: reducerMessage,
  status_code: reducerStatusCode,
});
