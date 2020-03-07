import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, setBooks] = useState([
    { title: "almost home", id: 1 },
    { title: "memory gospel", id: 2 },
    { title: "this wild darkness", id: 3 }
  ]);

  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: books.length + 1 }]);
  };

  const removeBook = id => {
    console.log(id);
    setBooks(books.filter(book => book.id !== id));
  };

  return <BookContext.Provider value={{ books, addBook, removeBook }}>{props.children}</BookContext.Provider>;
};

export default BookContextProvider;
