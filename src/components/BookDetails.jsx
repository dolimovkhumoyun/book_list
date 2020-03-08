import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const BookDetails = ({ book, key }) => {
  const { dispatch } = useContext(BookContext);
  return (
    <li onClick={() => dispatch({ type: "REMOVE_BOOK", id: book.id })} key={key}>
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </li>
  );
};

export default BookDetails;
