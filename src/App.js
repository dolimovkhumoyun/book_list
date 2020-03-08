// React
import React from "react";

// Custom

import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import NewBookForm from "./components/BookForm";

// Context Providers
import BookContextProvider from "./contexts/BookContext";

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
