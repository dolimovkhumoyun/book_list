import React from "react";

import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import ThemeToogle from "./components/ThemeToggle";
import BookContextProvider from "./contexts/BookContext";
import AuthContextProvider from "./contexts/AuthContext";
import ThemeContextProvider from "./contexts/ThemeContext";

const App = props => {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <ThemeToogle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
};

export default App;
