import React from "react";

import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import ThemeContextProvider from "./contexts/ThemeContext";
import ThemeToogle from "./components/ThemeToggle";
import AuthContextProvider from "./contexts/AuthContext";

const App = props => {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookList />
          <ThemeToogle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
};

export default App;
