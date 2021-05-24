import React, { Component } from "react";
import Palette from "./palette";
import seedColors from "./seedColors";
import { generatePalette } from "./utils/colorhelpers";
class App extends Component {
  render() {
    return <Palette palette={generatePalette(seedColors[4])} />;
  }
}

export default App;
