import React, { Component } from "react";

import { ThemeContext } from "../contexts/ThemeContext";

class ThemeToogle extends Component {
  static contextType = ThemeContext;
  render() {
    const { toggleTheme } = this.context;

    return <button onClick={toggleTheme}>Toggle</button>;
  }
}

export default ThemeToogle;
