import React from "react";

import SkillInputContainer from "./SkillInputContainer";

import "../styles/App.css";

class App extends React.Component {
  onSubmit(event) {
    event.preventDefault();
    console.log("submitted");
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label htmlFor='value'>IEP - 2020-10-11</label>
        <br />
        <br />
        Hit "Enter" to confirm, Click to remove
        <hr />
        <h2 htmlFor=''>Skills to improve</h2>
        <SkillInputContainer />
        <hr />
        <h2 htmlFor=''>Areas of strength</h2>
        <SkillInputContainer />
        <hr />
        <h2 htmlFor=''>Areas of attention</h2>
        <SkillInputContainer />
        <br />
        <br />
        <button type='submit'>Submit</button>
      </form>
    );
  }
}

export default App;
