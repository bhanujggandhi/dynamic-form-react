import React from "react";

import SkillInputContainer from "./SkillInputContainer";

import "../styles/App.css";

class App extends React.Component {
  constructor() {
    super();
    this.handleChangeSkill = this.handleChangeSkill.bind(this);
    this.handleChangeImprovements = this.handleChangeImprovements.bind(this);
    this.handleChangeAttention = this.handleChangeAttention.bind(this);
    this.state = {
      skills: [],
      improvements: [],
      attention: [],
    };
  }
  onSubmit(event) {
    if (event.key !== "Enter" || event.key !== "enter") {
      event.preventDefault();
      console.log("submitted");
    } else {
      return;
    }
  }

  handleChangeSkill(skills) {
    this.setState({ skills: skills });
  }
  handleChangeImprovements(skills) {
    this.setState({ improvements: skills });
  }
  handleChangeAttention(skills) {
    this.setState({ attention: skills });
  }

  render() {
    return (
      <div>
        <label htmlFor='value'>IEP - 2020-10-11</label>
        <br />
        <br />
        Click on empty space to add, Click on the item to remove, press enter to
        submit
        <hr />
        <form onSubmit={this.onSubmit}>
          <h2 htmlFor=''>Skills to improve</h2>
          <SkillInputContainer onSkillChange={this.handleChangeSkill} />
          <hr />
          <h2 htmlFor=''>Areas of strength</h2>
          <SkillInputContainer onSkillChange={this.handleChangeImprovements} />
          <hr />
          <h2 htmlFor=''>Areas of attention</h2>
          <SkillInputContainer onSkillChange={this.handleChangeAttention} />
          <hr />
          <br />
          <br />
          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}

export default App;
