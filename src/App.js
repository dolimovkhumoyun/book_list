import React from "react";
import BookContextProvider from "./contexts/BookContext";
import Navbar from "./components/Navbar";
import BookDetails from "./components/BookDetails";
import BookList from "./components/BookList";
import NewBookForm from "./components/BookForm";

const App = props => {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <NewBookForm />
      </BookContextProvider>
    </div>
  );
};

export default App;
